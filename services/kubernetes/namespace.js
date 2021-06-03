const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig()
kc.loadFromFile("./config/kube_config");
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

const createNamespace = async (ns) => {
    // Namespace object template
    const namespace = {
        metadata: {
            name: ns,
            labels: {
                "istio-injection": "enabled"
            }
        }
    }
    try {
        const resp = await k8sApi.createNamespace(namespace)
        return resp
    } catch(err) {
        return err.response.body
    }
}

const deleteNamespace = async (ns) => {
    try {
        const resp = await k8sApi.deleteNamespace(ns)
        return resp
    } catch(err) {
        return err.response.body
    }
}

module.exports = {createNamespace, deleteNamespace}
