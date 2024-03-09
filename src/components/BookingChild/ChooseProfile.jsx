import BoxCustom from '../Box/Box';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import dayjs from 'dayjs';
import { Badge, Calendar } from 'antd';
import { Button } from '@mui/material';
import { getDate } from '../../utils/Utils';
import ButonOutLine from '../Button/ButonOutLine';
import { useFormContext } from 'react-hook-form';
import Record from '../ProfileChild/Record/Record';


const ChooseProfile = props => {
    const { goBack, value, onChange } = props
    const handleClickProfile = (value) => {
        console.log("🚀 ~ handleClickProfile ~ value:", value)
        onChange(value)
    };

    return (
        <div className="flex flex-col w-full bg-blue3 justify-center items-center ">
            <div className=" py-24 w-[80%] md:gap-4 md:flex-col lg:flex lg:flex-row justify-start items-start lg:gap-5">
                <div className='lg:w-[300px] md:w-full '>
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

                <div className='w-full mt-4 lg:mt-0 flex flex-col gap-3 lg:w-3/4'>
                    <BoxCustom
                        title={<span className="text-xl">
                            Vui lòng chọn hồ sơ bệnh nhân
                        </span>}
                        description={
                            <div className='flex flex-col gap-2 w-full pt-3'>
                                <Record value={1} onClickBox={(value) => handleClickProfile(value)} />
                                <Button
                                    startIcon={<ArrowBackIosNewIcon />}
                                    onClick={goBack}
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

export default ChooseProfile;