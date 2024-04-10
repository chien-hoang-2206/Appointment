import BoxCustom from '../Box/Box';
import IC1 from '../../assets/icon/ic-speciality2.svg'
import IC2 from '../../assets/icon/ic-doctor.svg'
import IC3 from '../../assets/icon/ic-service.svg'
import IC4 from '../../assets/icon/ic-cal2.svg'
import IC5 from '../../assets/icon/ic-clock.svg'
import IC6 from '../../assets/icon/ic-wallet.svg'
import IC7 from '../../assets/icon/ic-money.svg'
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const DescriptionPayment = props => {
    const { onClickPayment, goBack } = props
    return (
        <>
            <div className="w-full flex flex-col gap-4">
                <div className="w-full flex flex-row gap-2 justify-between items-start">
                    <div className="flex  w-1/2 flex-col gap-2 justify-start items-start">
                        <div className='flex row gap-2'>
                            <input type='radio' checked={true} />
                            <span className="text-base">
                                Thanh toán tại bệnh viện
                            </span>
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-col gap-2">
                        <div className="text-xl flex flex-row gap-2 text-blue2 font-bold">
                            <img src={IC6} />
                            <span>
                                Thông tin thanh toán
                            </span>
                        </div>
                        <div className="border border-blue2 rounded-md flex flex-col p-2">
                            <div className="flex flex-col justify-start items-start">
                                <div className='w-full flex flex-row justify-between items-center  border-b-gray-light pb-1 border-b border-b-gray-light pb-1 border-b'>
                                    <div className="flex flex-row gap-4">
                                        <img src={IC1} />
                                        <span className='font-bold'>
                                            Chuyên khoa
                                        </span>
                                    </div>
                                    <span className='text-base'>Phổi</span>
                                </div>
                                <div className='w-full flex flex-row justify-between items-center  border-b-gray-light pb-1 border-b'>
                                    <div className="flex flex-row gap-4">
                                        <img src={IC2} />
                                        <span className='font-bold'>
                                            Bác sĩ
                                        </span>
                                    </div>
                                    <span className='text-base'>Âu Thanh Tùng</span>
                                </div>
                                <div className='w-full flex flex-row justify-between items-center  border-b-gray-light pb-1 border-b'>
                                    <div className="flex flex-row gap-4">
                                        <img src={IC3} />
                                        <span className='font-bold'>
                                            Dịch vụ
                                        </span>
                                    </div>
                                    <span className='text-base'>Khám dịch vụ</span>
                                </div>
                                <div className='w-full flex flex-row justify-between items-center  border-b-gray-light pb-1 border-b'>
                                    <div className="flex flex-row gap-4">
                                        <img src={IC4} />
                                        <span className='font-bold'>
                                            Ngày khám
                                        </span>
                                    </div>
                                    <span className='text-base'>15/03/2024</span>
                                </div>

                                <div className='w-full flex flex-row justify-between items-center  border-b-gray-light pb-1 border-b'>
                                    <div className="flex flex-row gap-4">
                                        <img src={IC5} />
                                        <span className='font-bold'>
                                            Giờ Khám
                                        </span>
                                    </div>
                                    <span className='text-base'>13:30 - 14:30</span>
                                </div>
                                <div className='w-full flex flex-row justify-between items-center'>
                                    <div className="flex flex-row gap-4">
                                        <img src={IC7} className='text-[#111]' />
                                        <span className='font-bold'>
                                            Tiền khám
                                        </span>
                                    </div>
                                    <span className='text-base text-blue2 font-bold'>150.000 VNĐ</span>
                                </div>

                            </div>
                        </div>
                        <div className="flex border-t border-t-gray-light w-full">
                            <div className=" w-full flex flex-col gap-3">
                                <div className="flex flex-row justify-between items-center w-full">
                                    <span className="font-bold">Phí tiện ích + Phí TGTT : </span>
                                    <span className="font-bold">0 VND </span>
                                </div>
                            </div>
                        </div>
                        <div className="text-xl w-full flex flex-col gap-3">
                            <div className="flex flex-row justify-between items-center w-full">
                                <span className="font-bold">Tổng cộng: </span>
                                <span className="font-bold text-blue">150.000 VND </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <Button
                        startIcon={<ArrowBackIosNewIcon />}
                        className='w-28' href="#text-buttons" o
                        nClick={() => goBack()}
                    >Quay lại</Button>
                    <Button
                        variant="contained"
                        className='w-36' href="#text-buttons"
                        onClick={() => onClickPayment()}
                    >
                        Xác nhận</Button>
                </div>
            </div>
        </>
    )
}

const ValidatePayment = (props) => {
    function onClickSubmit() {
        console.log('ssssss');
        props.onClickSubmit()
    }
    return (
        <div className='w-full flex flex-col items-center justify-center py-10'>
            <div className='flex flex-col w-[80%] xl:w-[70%] xl:flex-row justify-center gap-4 '>
                <BoxCustom
                    title={'Chọn phương thức thanh toán'}
                    description={<DescriptionPayment goBack={props.goBack} onClickPayment={onClickSubmit} />}
                />
            </div>
        </div>
    );
};

export default ValidatePayment;