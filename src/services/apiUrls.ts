export const getTree = (name: string) => `https://test.vmarmysh.com/api.user.tree.get?treeName=${name}`;

export const createNode = (treeName: string, parentId: number, nodeName: string) => (
  `https://test.vmarmysh.com/api.user.tree.node.create?treeName=${treeName}&parentNodeId=${parentId}&nodeName=${nodeName}`);

export const deleteNode = (treeName: string, nodeID: number) => `https://test.vmarmysh.com/api.user.tree.node.delete?treeName=${treeName}&nodeId=${nodeID}`;

export const editNodeName = (treeName: string, nodeID: number, newName: string) => (
  `https://test.vmarmysh.com/api.user.tree.node.rename?treeName=${treeName}&nodeId=${nodeID}&newNodeName=${newName}`);
