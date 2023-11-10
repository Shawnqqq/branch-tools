const axios = require("axios")
// const execSync = require('child_process').execSync;

const handleSetBranch = async function(e,c) {
  const requestUrl = e === 'uat' ? `https://uat-ones.jiker.vip/ones/ones-admin/v1/admin/deploys/${c}/config` : ''
  let result = {};
  try {
    result = await axios.get(requestUrl);
  } catch (e) {
    console.log('bad request')
  }
  if (result.status === 200) {
    const { data: { data = {} } } = result;
    if (data.deployVersionVo) {
      console.log(data.deployVersionVo.version)
      handleSetSubmoduleBranch(data.deployVersionVo.packages)
    }
  }
}

handleSetSubmoduleBranch= async function(submodule) {
  submodule.forEach(async (item) => {
    console.log(item)
  })
}

module.exports = (e,c) => {
  handleSetBranch(e,c)
}