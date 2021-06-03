const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig()
kc.loadFromFile("./config/kube_config");
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

const createDeployment = () => {

}

const deleteDeployment = (deploymentName) => {

}

module.exports = {createDeployment, deleteDeployment}