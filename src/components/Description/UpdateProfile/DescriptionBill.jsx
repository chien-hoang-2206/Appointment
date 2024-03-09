import Box from '../../Box/Box';
import { Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Constants from '../../../utils/constants';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;
const UpdateProfile = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [districts, setDistricts] = useState([]);
    const navigate = useNavigate()

    const [wards, setWards] = useState([]);
    const watchProvince = watch('ProvinceId')
    useEffect(() => {
        axios
            .get(`https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1`)
            .then((response) => {
                console.log("🚀 ~ .then ~ response:", response)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className='flex flex-col justify-start  gap-2'>
            <Box
                description={'Vui lòng cung cấp thông tin chính xác để được phục vụ tốt nhất. Trong trường hợp cung cấp sai thông tin bệnh nhân & điện thoại, việc xác nhận cuộc hẹn sẽ không hiệu lực trước khi đặt khám.'}
            />
            <span className='text-red text-xl '>(*) Thông tin bắt buộc nhập</span>
            <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row gap-10 justify-between">
                    <div className='w-1/2'>
                        <Title level={4}>Họ và tên (có dấu)*</Title>
                        <input
                            type="text"
                            placeholder="Hoàng Văn A"
                            className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
                            {...register('fullName', { required: true })}
                        />
                        {errors.fullName && <span className="text-red">Bắt buộc nhập thông tin</span>}
                    </div>
                    <div className='w-1/2'>
                        <Title level={4}>Ngày sinh *</Title>
                        <input
                            type="date"
                            placeholder="mm/dd/yyyy"
                            className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
                            {...register('dob', { required: true })}
                        />
                        {errors.dob && <span className="text-red">Bắt buộc nhập thông tin</span>}
                    </div>
                </div>
                <div className="flex flex-row gap-10 justify-between">
                    <div className='w-1/2'>
                        <Title level={4}>Số điện thoại *</Title>
                        <input
                            type="tel" id="phone"
                            placeholder="09202020201"
                            className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
                            {...register('job', { required: true })}
                        />
                        {errors.job && <span className="text-red">Bắt buộc nhập thông tin</span>}
                    </div>
                    <div className='w-1/2'>
                        <Title level={4}>Giới tính*</Title>
                        <select
                            type="text"
                            placeholder="dd/mm/yyyy"
                            className="w-full border border-slate-200 rounded-lg py-3 px-3 outline-none  bg-transparent"
                        >
                            <option className='rounded-sm' value="">Chọn giới tính</option>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                            <option value="other">Khác</option>
                        </select>
                        {errors.gender && <span className="text-red">Bắt buộc nhập thông tin</span>}
                    </div>
                </div>
                <div className="flex flex-row gap-10 justify-between">
                    <div className='w-1/2'>
                        <Title level={4}>Nghề nghiệp *</Title>
                        <input
                            type="text"
                            placeholder="Nhập nghề nhiệp"
                            className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
                            {...register('job', { required: true })}
                        />
                        {errors.job && <span className="text-red">Bắt buộc nhập thông tin</span>}
                    </div>
                    <div className='w-1/2'>
                        <Title level={4}>Số CMND/CCCD *</Title>
                        <input
                            type="number"
                            placeholder="Nhập số CMND/CCCD"
                            className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
                            {...register('CCCD', { required: true })}
                        />
                        {errors.CCCD && <span className="text-red">Bắt buộc nhập thông tin</span>}
                    </div>
                </div>
                <div className="flex flex-row gap-10 justify-between">
                    <div className='w-1/2'>
                        <Title level={4}>Địa chỉ Email *</Title>
                        <input
                            type="email"
                            placeholder="nguyenvana@gmail.com"
                            className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
                            {...register('Email', { required: true })}
                        />
                        {errors.Email && <span className="text-red">Bắt buộc nhập thông tin</span>}
                    </div>
                    <div className='w-1/2'>
                        <Title level={4}>Dân tộc *</Title>
                        <select
                            type="text"
                            placeholder="dd/mm/yyyy"
                            className="w-full border border-slate-200 rounded-lg py-3 px-3 outline-none  bg-transparent"
                            {...register('Nation', { required: true })}
                        >
                            {Constants.nationVN?.map((item, index) => (
                                <option key={index} value={item?.value}>{item?.label}</option>
                            ))}
                        </select>
                        {errors.Nation && <span className="text-red">Bắt buộc nhập thông tin</span>}
                    </div>
                </div>

                <div className="flex flex-row gap-10 justify-between">
                    <div className='w-1/2'>
                        <Title level={4}>Tỉnh / Thành *</Title>
                        <select
                            type="text"
                            placeholder="Chọn tỉnh / thành phố"
                            className="w-full border border-slate-200 rounded-lg py-3 px-3 outline-none  bg-transparent"
                            {...register('ProvinceId', { required: true })}
                        >
                            {Constants.vietnamProvinces?.map((item, index) => (
                                <option key={index} value={item?.value}>{item?.label}</option>
                            ))}
                        </select>
                        {errors.ProvinceId && <span className="text-red">Bắt buộc nhập thông tin</span>}
                    </div>
                    <div className='w-1/2'>
                        <Title level={4}>Quận / Huyện *</Title>
                        <select
                            type="text"
                            placeholder="Chọn quận / huyện"
                            className="w-full border border-slate-200 rounded-lg py-3 px-3 outline-none  bg-transparent"
                        // {...register('District', { required: true })}
                        >
                            {districts?.map((item, index) => (
                                <option key={index} value={item?.value}>{item?.label}</option>
                            ))}
                        </select>
                        {errors.District && <span className="text-red">Bắt buộc nhập thông tin</span>}
                    </div>
                </div>

                <div className="flex flex-row gap-10 justify-between">
                    <div className='w-1/2'>
                        <Title level={4}>Phường / Xã *</Title>
                        <select
                            type="text"
                            placeholder="Chọn phường / xã"
                            className="w-full border border-slate-200 rounded-lg py-3 px-3 outline-none  bg-transparent"
                        // {...register('Wards', { required: true })}
                        >
                            {/* {Constants.vietnamProvinces?.map((item, index) => (
                                <option key={index} value={item?.value}>{item?.label}</option>
                            ))} */}
                        </select>
                        {errors.Wards && <span className="text-red">Bắt buộc nhập thông tin</span>}
                    </div>
                    <div className='w-1/2'>
                        <Title level={4}>Địa chỉ *</Title>
                        <input
                            type="text"
                            placeholder="Nhập địa chỉ"
                            className="w-full border border-slate-200 rounded-lg py-3 px-3 outline-none  bg-transparent"
                            {...register('Address', { required: true })}
                        />
                        {errors.Address && <span className="text-red">Bắt buộc nhập thông tin</span>}
                    </div>
                </div>

                <div className="flex flex-row items-end justify-between">
                    <Button
                        startIcon={<ArrowBackIosNewIcon />}
                        className='w-28' href="#text-buttons" onClick={() => navigate(-1)}>Quay lại</Button>
                    <Button type="submit" variant="contained" className='w-24 float-right rounded-md'>Lưu</Button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;