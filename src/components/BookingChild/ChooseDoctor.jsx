import PropTypes from 'prop-types';
import BoxCustom from '../Box/Box';
import InputSearch from '../Input/InputSearch';
import DescriptionDoctor from '../Description/DescriptionDoctor/DescriptionDoctor';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const ChooseDoctor = props => {
    const { goBack, value, onChangeDoctor } = props
    function handleChangeDoctor(id) {
        onChangeDoctor(id)
    }
    return (
        <div className="flex flex-col w-full bg-blue3 justify-center items-center ">
            <div className=" py-24 w-[70%] md:gap-4 md:flex-col lg:flex lg:flex-row justify-start items-start lg:gap-5">
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

                <div className='w-full mt-4 lg:mt-0 flex flex-col gap-3 lg:w-full'>
                    <BoxCustom
                        title={<span className="text-xl">
                            Vui lòng chọn Bác sĩ
                        </span>}
                        description={
                            <div className='flex flex-col gap-2 w-full pt-3'>
                                <InputSearch
                                    className="border rounded-md border-gray-light w-full "
                                    placeholder='Tìm kiếm chuyên khoa'
                                />

                                <div className='max-h-[600px] gap-3 flex flex-col overflow-scroll mt-4 w-full border-b border-b-gray-light mb-1'>
                                    <BoxCustom
                                        onClick={() => handleChangeDoctor(2)}
                                        description={<DescriptionDoctor />}
                                    />
                                    <BoxCustom
                                        description={<DescriptionDoctor />}
                                    />
                                    <BoxCustom
                                        description={<DescriptionDoctor />}
                                    />
                                    <BoxCustom
                                        description={<DescriptionDoctor />}
                                    />
                                </div>
                                <Button
                                    startIcon={<ArrowBackIosNewIcon />}
                                    onClick={goBack}
                                    className='w-28' href="#text-buttons" onClick={() => goBack()}>Quay lại</Button>
                            </div>
                        }
                    />

                </div>
            </div>
        </div>
    );
};

export default ChooseDoctor;