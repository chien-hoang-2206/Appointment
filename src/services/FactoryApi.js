import ApiConstants from "../adapter/ApiConstants";
import ApiOperation from "../adapter/ApiOperation";

const Factories = {
  getBranchList: async (keyword, id) => {
    let params = {};
    if (keyword) {
      params.keyword = keyword
    }
    if (id) {
      params.id = id
    }
    return ApiOperation.request({
      url: `${ApiConstants.BRANCH}`,
      method: "GET",
      params: params
    });
  },
  getDepartmentList: async (id) => {
    return ApiOperation.request({
      url: `${ApiConstants.DEPARTMENT}`,
      method: "GET",
      params: {
        branch: id
      }
    });
  },
  createBranch: async (data) => {
    return ApiOperation.request({
      url: ApiConstants.BRANCH,
      method: "POST",
      data: data,
    });
  },
  createDepart: async (data) => {
    return ApiOperation.request({
      url: ApiConstants.DEPARTMENT,
      method: "POST",
      data: data,
    });
  },

  getAccountList: async (keyword, role = 2,) => {
    let params = {};
    if (keyword) {
      params.keyword = keyword
    }
    if (role) {
      params.role = role
    }
    return ApiOperation.request({
      url: `${ApiConstants.ACCOUNT}`,
      method: "GET",
      params: params
    });
  },

  getListPatient: async (data) => {
    let params = {};
    if (data?.keyword) {
      params.keyword = data?.keyword
    }
    if (data?.userId) {
      params.userId = data?.userId
    }
    if (data?._id) {
      params._id = data?._id
    }
    return ApiOperation.request({
      url: ApiConstants.PATIENT,
      method: "GET",
      params: params
    });
  },

  createPatient: async (data) => {
    return ApiOperation.request({
      url: ApiConstants.PATIENT,
      method: "POST",
      data: data,
    });
  },

  updatePatient: async (data) => {
    return ApiOperation.request({
      url: ApiConstants.PATIENT,
      method: "PUT",
      data: data,
    });
  },
  deletePatient: async (data) => {
    return ApiOperation.request({
      url: `${ApiConstants.PATIENT}/${data}`,
      method: "DELETE",
      data: data,
    });
  },


  // old 
  getListPGT: async (Type = 10, KeyWord, Category) => {
    let params = {};
    if (KeyWord) {
      params.KeyWord = KeyWord;
    }
    if (Category) {
      params.Category = Category;
    }
    if (Type) {
      params.Type = Type;
    }
    return ApiOperation.request({
      url: ApiConstants.PGT,
      method: "GET",
      params: params,
    });
  },
  getPGTDetail: async data => {
    return ApiOperation.request({
      url: `${ApiConstants.PGT}/${data}`,
      method: "GET",
    });
  },
  getPGTFeedbackList: async data => {
    return ApiOperation.request({
      url: `${ApiConstants.PGT_FEEDBACK}/${data}`,
      method: "GET",
    });
  },
  requestBooking: async data => {
    return ApiOperation.request({
      url: ApiConstants.BOOKING_PGT,
      method: "POST",
      data: data,
    });
  },
};

export default Factories;
