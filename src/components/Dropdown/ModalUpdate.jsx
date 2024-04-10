import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Button, Modal, Select, Cascader, Row, Col, message, Image } from "antd";

import classes from './Dropdown.module.scss'
import Constants from '../../utils/constants';
import { toast } from 'react-toastify';
import AccountFactories from '../../services/AccountFactories';
import { ToastNoti } from '../../utils/Utils';
import CategoriesFactories from '../../services/CategoriesFatories';
import Factories from '../../services/FactoryApi';

const ModalUpdate = ({ openUpdate, onCloseUpdateModalHandler, updateSuccess = () => { }, data, type = 2 }) => {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});
    useEffect(() => {
        if (data) {
            setProfile(data)
        }
    }, [data?.email])

    const [branch, setBranch] = useState()
    const [department, setDepartment] = useState()

    useLayoutEffect(() => {
        const fetchData = async () => {
            console.log("🚀 ~ fetchData ~ profile:", profile)
            const response = await Factories.getDepartmentList(profile?.branch);
            console.log("🚀 ~ fetchData ~ response:", response)
            setDepartment(response);
        };
        fetchData();
    }, [profile?.branch]);

    useLayoutEffect(() => {
        const fetchData = async () => {
            const response = await Factories.getBranchList();
            setBranch(response);
        };
        fetchData();
    }, []);

    const optionBranch = branch?.map((field) => {
        return {
            value: field._id,
            key: field._id,
            label: field.name,
        };
    });
    const optionDepartment = department?.map((field) => {
        return {
            value: field._id,
            key: field._id,
            label: field.name,
        };
    });
    const inputChangeHandler = (event, name) => {
        setProfile((prevState) => {
            return {
                ...prevState,
                [name]: event.target.value,
            };
        });
    };

    const onChangeCityHandler = (value) => {
        setProfile((prevState) => {
            return {
                ...prevState,
                province: value,
            };
        });
    };

    const onChangeSelectHandler = (value, name) => {
        setProfile((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const onChangeFieldsHandler = (value) => {
        setProfile((prevState) => {
            return {
                ...prevState,
                listGame: value
            };
        });
    };

    const validateFormData = (formData) => {
        let res = true;
        let errMsg = "";
        if (!formData.email) {
            errMsg = "Vui lòng nhập EMAIL!";
        } else if (!formData.flag) {
            errMsg = "Vui lòng trạng thái tài khoản";
        } else if (formData.listGame?.lenght == 0) {
            errMsg = "Vui lòng chọn lĩnh vực hoạt động!";
        }
        if (errMsg) {
            toast.error(errMsg)
        }
        return res;
    };

    async function onUpdate(event) {
        if (!validateFormData(profile)) return;
        setLoading(true);
        try {
            const data = {
                first_name: profile?.first_name,
                last_name: profile?.last_name,
                user_name: profile?.user_name,
                email: profile?.email,
                gender: profile?.gender,
                address: profile?.address,
                phone: profile?.phone,
                flag: profile?.flag,
                province: profile?.province,
                listgame: profile?.listGame,
            }
            const response = await AccountFactories.requestUpdate(profile.id, data);
            if (response?.status === 200) {
                ToastNoti();
                updateSuccess();
                onCloseUpdateModalHandler();
            }
        } catch (error) {
            console.log(error);
            toast.error('Hệ thống lỗi.')
        }
    }

    return (
        <Modal
            destroyOnClose={true}
            width={1200}
            open={openUpdate}
            onCancel={onCloseUpdateModalHandler}
            style={{
                top: '10vh',
            }}
            title="Cập nhật thông tin"
            footer={[
                <Button key="back" onClick={onCloseUpdateModalHandler}>
                    Hủy bỏ
                </Button>,
                <Button key="submit" type="primary" onClick={onUpdate}>
                    Lưu thông tin
                </Button>,
            ]}
        >
            <div>
                <Row>
                    <Col span={4}>
                        <Image style={{ borderRadius: 10 }} width={160} height={160} src={data.image} />
                    </Col>
                    <Col span={20}>
                        <Row>
                            <Col span={12}  >
                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Họ:</span>
                                    </Row>
                                    <Row>
                                        <input
                                            placeholder="Nhập họ và tên"
                                            className={classes['modal-update-col-input']}
                                            value={profile.fullname}
                                            name="first_name"
                                            onChange={(e) => inputChangeHandler(e, 'first_name')}
                                        />
                                    </Row>
                                </div>

                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Giới tính:</span>
                                    </Row>
                                    <Row>
                                        <Select
                                            placeholder="Giới tính"
                                            defaultValue={'Nữ'}
                                            style={{
                                                width: "100%",
                                            }}
                                            value={profile.gender}
                                            onChange={(value) => onChangeSelectHandler(value, 'gender')}
                                            options={Constants.optionSex}
                                        />
                                    </Row>
                                </div>

                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Số điện thoại:</span>
                                    </Row>
                                    <Row>
                                        <input
                                            placeholder="Số điện thoại"
                                            className={classes['modal-update-col-input']}
                                            onChange={(e) => inputChangeHandler(e, 'phone')}
                                            value={profile.phone}
                                            name="phone"
                                        />
                                    </Row>
                                </div>

                                <div className={classes.formInfo}>
                                    <Row >
                                        <span>Tỉnh/Thành phố:</span>
                                    </Row>
                                    <Row>
                                        <Select
                                            style={{
                                                width: "100%",
                                            }}
                                            defaultValue={profile.cityId}
                                            options={Constants.vietnamProvinces}
                                            onChange={onChangeCityHandler}
                                            value={profile.province}
                                        />
                                    </Row>
                                </div>
                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Trạng thái:</span>
                                    </Row>
                                    <Row>
                                        <Select
                                            style={{
                                                width: "100%",
                                            }}
                                            placeholder="Chọn trạng thái"
                                            onChange={(value) => onChangeSelectHandler(value, 'flag')}
                                            value={profile.flag}
                                            options={Constants.optionStatusAccount}
                                        />
                                    </Row>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Email:</span>
                                    </Row>
                                    <Row>
                                        <input
                                            placeholder="Email"
                                            className={classes['modal-update-col-input']}
                                            value={profile.email}
                                            onChange={(e) => inputChangeHandler(e, 'email')}
                                            name="email"
                                        />
                                    </Row>
                                </div>

                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Địa chỉ cụ thể:</span>
                                    </Row>
                                    <Row>
                                        <input
                                            placeholder="Địa chỉ cụ thể"
                                            className={classes['modal-update-col-input']}
                                            onChange={(e) => inputChangeHandler(e, 'address')}
                                            value={profile.address}
                                            name="address"
                                        />
                                    </Row>
                                </div>

                                {type == 2 && <div className={classes.formInfo}>
                                    <Row>
                                        <span className='uppercase text-2xl'>Chi nhánh bệnh viện:</span>
                                    </Row>
                                    <Row>
                                        <Select
                                            // mode="multiple"
                                            style={{
                                                width: "100%",
                                            }}
                                            placeholder="Chi nhánh bệnh viện"
                                            onChange={(value) => onChangeSelectHandler(value, 'branch')}
                                            options={optionBranch}
                                        />
                                    </Row>
                                </div>}
                                {type == 2 && <div className={classes.formInfo}>
                                    <Row>
                                        <span>Khoa làm việc:</span>
                                    </Row>
                                    <Row>
                                        <Select
                                            mode="multiple"
                                            style={{
                                                width: "100%",
                                            }}
                                            onChange={(value) => onChangeSelectHandler(value, 'department')}
                                            placeholder="Chọn khoa làm việc"
                                            options={optionDepartment}
                                        />
                                    </Row>
                                </div>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Modal >
    )
}
export default ModalUpdate