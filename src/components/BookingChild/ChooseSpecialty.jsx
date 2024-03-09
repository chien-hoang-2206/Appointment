import PropTypes from 'prop-types';
import BoxCustom from '../Box/Box';
import InputSearch from '../Input/InputSearch';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Pagination } from 'antd';
import { useState } from 'react';

const ChooseSpecialty = props => {
    const { value, onChangeSpecialty, goBack } = props
    function handleChangeSpeciality(id) {
        onChangeSpecialty(id)
    }
    function handleChangeDoctor(id) {
        onChangeDoctor(id)
    }


    return (
        <div className="flex flex-col w-full bg-blue3 justify-center items-center ">
            <div className=" py-24 w-[80%] flex flex-row justify-start items-start gap-5">
                <div className='w-[200px]'>
                    <BoxCustom
                        title={<span className="text-xl">
                            Thông tin cơ sở y tế
                        </span>}
                        description={
                            <div className='flex flex-col gap-2'>
                                <span className="text-[#111] font-bold" >
                                    Bệnh viện Đại học Y Dược TP.HCM
                                </span>
                                <span className="leading-4 text-sm" >
                                    Cơ sở 201 Nguyễn Chí Thanh, Phường 12, Quận 5, TP. Hồ Chí Minh
                                </span>
                            </div>
                        }
                    />
                </div>

                <div className='w-[80%] flex flex-col gap-3'>
                    <BoxCustom
                        title={<span className="text-xl">
                            Vui lòng chọn Chuyên Khoa
                        </span>}
                        description={
                            <div className='flex flex-col gap-2 w-full pt-3'>
                                <InputSearch
                                    className="border rounded-md border-gray-light w-full "
                                    placeholder='Tìm kiếm chuyên khoa'
                                />

                                <div className='max-h-[600px] overflow-scroll mt-4 w-full border-b border-b-gray-light mb-5'>
                                    <div className='border-t  border-t-gray-light py-4 '>
                                        <button
                                            onClick={() => handleChangeSpeciality(1)}
                                            className='border-none'
                                        >
                                            <span className="w-full text-xl uppercase hover:text-blue2  text-[#111] font-bold" >
                                                Khám chức năng hô hấp
                                            </span>
                                        </button>
                                    </div>
                                    <div className='border-t  border-t-gray-light py-4 '>
                                        <button
                                            onClick={() => handleChangeSpeciality(2)}
                                            className='border-none'
                                        >
                                            <span className="w-full text-xl uppercase hover:text-blue2  text-[#111] font-bold" >
                                                KHÁM ĐIỀU TRỊ VẾT THƯƠNG
                                            </span>
                                        </button>
                                    </div>
                                    <div className='border-t  border-t-gray-light py-4 '>
                                        <button
                                            onClick={() => handleChangeSpeciality(3)}
                                            className='border-none'
                                        >
                                            <span className="w-full text-xl uppercase hover:text-blue2  text-[#111] font-bold" >
                                                KHÁM LỒNG NGỰC
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <Button
                                    startIcon={<ArrowBackIosNewIcon />}
                                    className='w-28' href="#text-buttons" onClick={() => goBack()}>
                                    Quay lại
                                </Button>
                            </div>
                        }
                    />


                </div>

            </div>
        </div>
    );
};

ChooseSpecialty.propTypes = {

};

export default ChooseSpecialty;