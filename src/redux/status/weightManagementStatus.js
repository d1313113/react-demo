export const isManagement = (management) => {
  if (management && management.vo) {
    management.vo.currentWeight = (management.vo.currentWeight*2).toFixed(1);
    management.vo.targetWeight = (management.vo.targetWeight*2).toFixed(1);
    management.currentWeight = (management.currentWeight*2).toFixed(1);
    return {
      ...management,
      isManagement:true
    };
  } else {
    return {
      isManagement:false
    };
  }
};