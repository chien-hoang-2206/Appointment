import { useEffect, useState } from "react";
import { Input, Select, Table } from "antd";
import "./ManagerBranch.css";
import { ToastNoti, ToastNotiError, convertStringToNumber, partStringToNumber as parseStringToNumber } from "../../../../utils/Utils";
import AccountFactories from "../../../../services/AccountFactories";
import Factories from "../../../../services/FactoryApi";
import { Avatar, Button } from "@mui/material";
import { Image, Modal } from "antd/es";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../firebase";
import { v4 } from "uuid";
import { AppstoreAddOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import AvatarGroup from "../../../../components/image-group/AvatarGroup";

const ManagerBranch = () => {
  const [keyword, setKeyword] = useState("");
  const [listData, setListData] = useState([]);
  const [listDoctor, setListDoctor] = useState([]);
  const [openModalAdd, setOpenModalAdd] = useState(false)
  const [openModalAddDepart, setOpenModalAddDepart] = useState(false)
  const [fileUploadLink, setFileUploadLink] = useState();
  const [branchId, setBranchId] = useState();

  const fetchData = async (keyword) => {
    try {
      const response = await Factories.getBranchList(keyword);
      setListData(response);
    } catch (error) {
      ToastNotiError(error);
    }
  };
  const fetchDataDoctor = async (keyword) => {
    try {
      const response = await Factories.getAccountList(keyword, 2);
      const option = response?.map((field) => {
        return {
          value: field._id,
          key: field._id,
          label: field.fullName,
        };
      });
      setListDoctor(option);
    } catch (error) {
      ToastNotiError(error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchDataDoctor()
  }, []);

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: 50,
      align: 'center',
      render: (id, record, index) => { ++index; return index; },
      showSorterTooltip: false,
    },
    {
      title: "Hình ảnh",
      align: 'left',
      dataIndex: "image",
      key: "image",
      width: 150,
      render: text =>
        <Image className='shadow-md h-28' src={text} />
    },
    {
      title: "Tên Bệnh viện",
      width: 400,
      dataIndex: "name",
      render: (text) => (
        <div className="">
          {text}
        </div>
      ),
    },
    {
      title: "Địa chỉ",
      width: 600,
      dataIndex: "address",
      render: (text) => (
        <div className="">
          {text}
        </div>
      ),
    },
    {
      title: "Tác vụ",
      key: "action",
      width: 300,
      align: 'center',
      render: (_, record) =>
        <div className="flex justify-center flex-row gap-2" >
          <Button
            variant="outline"
            onClick={() => handleDeleteHotPgt(record)}
          >
            <DeleteOutlined className='text-red' />
          </Button>
          {/* <Button
            variant="outline"
            onClick={() => handleUpdate(record)}
          >
            <EditOutlined />
          </Button> */}
        </div>
    }
  ];
  const [departName, setDepartAddName] = useState()
  const [doctorIds, setDoctorIds] = useState()
  const [address, setAddress] = useState()

  const onAddBranchtSubmit = async () => {
    const data = {
      name: departName,
      image: fileUploadLink,
      address: address,
    }
    try {
      const resp = await Factories.createBranch(data);
      if (resp) {
        ToastNoti();
        fetchData()
        onCloseModalAddField()
      } else {
        ToastNotiError(resp?.message);
      }
    } catch (error) {
      ToastNotiError();
    }
  }
  const onAddDepartmentSubmit = async () => {
    const data = {
      name: departName,
      branchId: branchId,
      doctorIds: doctorIds,
    }
    try {
      const resp = await Factories.createDepart(data);
      if (resp) {
        ToastNoti();
        fetchData()
        onCloseModalAddDepart()
      } else {
        ToastNotiError(resp?.message);
      }
    } catch (error) {
      ToastNotiError();
    }
  }

  const onChangeDataAddField = (event) => {
    setDepartAddName(event.target.value)
  }
  const onChangeDataAddress = (event) => {
    setAddress(event.target.value)
  }

  const handleOnChangeInput = e => {
    setKeyword(e.target.value);
  };
  const handleUpdate = async value => {
    // const data = {
    //   hot_pgt: true
    // }
    // try {
    //   const response = await AccountFactories.requestUpdate(value?.id, data);
    //   if (response.status === 200) {
    //     ToastNoti();
    //     fetchData(null, typeSearch);
    //   } else {
    //     ToastNotiError();
    //   }
    // } catch (error) {
    //   console.log(error);
    //   ToastNotiError();
    // }
  };
  const handleDeleteHotPgt = async value => {
    const data = {
      hot_pgt: false
    }
    try {
      const response = await AccountFactories.requestUpdate(value?.id, data);
      if (response.status === 200) {
        ToastNoti();
        fetchData(null, typeSearch);
      } else {
        ToastNotiError();
      }
    } catch (error) {
      ToastNotiError();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      fetchData(keyword);
    }
  };

  function handleReset() {
    setKeyword();
    fetchData()
  }
  function handleSearch() {
    fetchData(keyword)
  }

  const onOpenModalAddField = () => {
    setOpenModalAdd(true)
  }

  const onCloseModalAddField = () => {
    setOpenModalAdd(false)
    fetchData();
  }
  const onCloseModalAddDepart = () => {
    setOpenModalAddDepart(false)
    setDepartAddName(null)
    setDoctorIds(null)
    fetchData();
  }
  const handleAddDepartment = (_id) => {
    setOpenModalAddDepart(true)
    setBranchId(_id)
  }

  function handleChangeImage(file) {
    if (file === null || !file) {
      console.log('No file selected.');
      return;
    }
    const uniqueFileName = `${file.name}_${v4()}`;
    const imageRef = ref(storage, `avatar/${uniqueFileName}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setFileUploadLink(downloadURL)
      });
    }).catch((error) => {
      console.error('Error uploading file:', error);
    });
  }
  return (
    <div className="booking-container " style={{ height: '100vh', overflow: 'scroll' }}>
      <div className="booking-title">
        <span className='uppercase text-3xl'>Chi nhánh bệnh viện
        </span>
      </div>
      <div className="booking-search">
        <Input
          placeholder="Tìm kiếm theo mã, tên người thuê, ..."
          size="middle "
          value={keyword}
          className='w-[50%]'
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => handleOnChangeInput(e)} />
        <Button
          variant="outlined"
          onClick={handleReset}
        >
          Mặc định
        </Button>
        <Button
          variant="contained"
          onClick={handleSearch}
        >
          Tìm kiếm
        </Button>
        <Button variant="contained" onClick={onOpenModalAddField} >Thêm bệnh viện</Button>
      </div>
      <div className="booking-table">
        <Table
          columns={columns}
          dataSource={listData ?? []}
          expandable={{
            expandedRowRender: (record) => (
              <div className="flex flex-col  w-full px-24 ">
                <div className="flex  w-full justify-between">
                  <span className="font-bold">Danh sách khoa khám</span>
                  <Button
                    variant="contained"
                    className='py-1'
                    onClick={() => handleAddDepartment(record?._id)}
                  >
                    <AppstoreAddOutlined />
                  </Button>
                </div>
                <div className="flex justify-between my-4">
                  <span className="font-bold"> Tên chuyên khoa</span>
                  <span className="font-bold"> Danh sách bác sĩ</span>
                  <span className="font-semibold">  </span>
                </div>
                {record?.departments?.map(department => (
                  <div key={department._id} className="flex justify-between my-1">
                    <div className="flex flex-row justify-between items-center ">
                      <span className="font-semibold min-w-[500px]">{department?.name}</span>
                      <span className="font-thin flex flex-row justify-start items-center min-w-28">
                        <AvatarGroup list={department?.doctors} />
                      </span>
                    </div>
                    <Button>
                      <EditOutlined />
                    </Button>
                  </div>
                ))}

              </div>
            ),
            rowExpandable: (record) => record.name !== 'Not Expandable',
          }}
          pagination={{
            defaultPageSize: 8,
            showSizeChanger: false,
            pageSizeOptions: ["10", "20", "30"]
          }}
        />
        <Modal
          width={800}
          title="Thêm bệnh viện"
          open={openModalAdd}
          onCancel={onCloseModalAddField}
          footer={[]}
        >
          <div className='flex flex-row'>
            <div className='flex flex-col my-2'>
              <input
                id="uploadInput"
                type="file"
                className='uploadInput'
                style={{ display: 'none' }}
                onChange={(e) => handleChangeImage(e.target.files[0])}
              />
              <Avatar
                src={fileUploadLink ?? ''}
                alt="avatar"
                style={{ width: 150, height: 150 }}
              />
              <label style={{ padding: '2px 50px', border: '1px solid #FAF8F1', borderRadius: 5 }} htmlFor="uploadInput" className='uploadButton'>
                Upload
              </label>
            </div>
            <div className="flex w-full justify-between px-4 flex-col">
              <div className='flex flex-col'>
                <Input
                  type="text"
                  style={{ width: '100%' }}
                  placeholder="Nhập tên bệnh viện "
                  className='add-modal-input my-2'
                  value={departName}
                  onChange={onChangeDataAddField}
                  name="name"
                />
                <Input
                  type="text"
                  style={{ width: '100%' }}
                  placeholder="Nhập địa chỉ"
                  className='add-modal-input my-2'
                  value={address}
                  onChange={onChangeDataAddress}
                  name="address"
                />
              </div>
              <Button variant="contained" style={{ width: '100%', float: 'right' }} onClick={onAddBranchtSubmit}>Thêm</Button>
            </div>

          </div>
        </Modal >

        <Modal
          width={800}
          title="Thêm chuyên khoa của bệnh viện"
          open={openModalAddDepart}
          onCancel={onCloseModalAddDepart}
          footer={[]}
        >
          <div className='flex flex-row'>
            <div className="flex w-full justify-between px-4 flex-col">
              <div className='flex flex-col  gap-6'>
                <Input
                  type="text"
                  style={{ width: '100%' }}
                  placeholder="Nhập tên chuyên khoa"
                  className='add-modal-input my-2'
                  onChange={onChangeDataAddField}
                  value={departName}
                  name="name"
                />
                <Select
                  mode="multiple"
                  placeholder='Chọn bác sĩ thuộc chuyên khoa'
                  options={listDoctor}
                  value={doctorIds}
                  onChange={(e) => setDoctorIds(e)}
                  style={{ minWidth: 180 }}
                />
                <Button variant="contained" style={{ width: '100%', float: 'right' }} onClick={onAddDepartmentSubmit}>Thêm</Button>
              </div>
            </div>

          </div>
        </Modal >
      </div>
    </div>
  );
};

export default ManagerBranch;
