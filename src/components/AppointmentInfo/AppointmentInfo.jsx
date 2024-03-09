import { useNavigate } from 'react-router-dom';
import CustomTable from '../CustomTable/CustomTable';
import DescriptionProfile from '../Description/DescriptionProfile/DescriptionProfile';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BoxCustom from '../Box/Box';
import { Button } from '@mui/material';
import DetailItem from '../DetailItem/DetailItem';


const headCells = [
    {
        id: 'name',
        numeric: false,
        // disablePadding: false,
        label: 'Chuyên khoa',
        isSort: false,
    },
    {
        id: 'doctor',
        numeric: false,
        // disablePadding: false,
        label: 'Bác sĩ',
        isSort: false,
    },
    {
        id: 'service',
        disablePadding: false,
        label: 'Dịch vụ',
    },
    {
        id: 'time',
        align: 'left',
        disablePadding: false,
        label: 'Thời gian khám',
    },
    {
        id: 'money',
        disablePadding: false,
        label: 'Tiền khám',
    }
];


const rows = [
    {
        name: 'Đông y',
        service: 'Khám BHYT',
        doctor: 'Nguyễn Vũ Duy',
        time: '07:30 - 08:30 05/03/2024',
        money: 'Thanh toán tại Bệnh viện',
    }
];

const AppointmentInfo = (props) => {
    const { data, onClickPayment } = props
    const navigate = useNavigate()
    return (
        <div className='w-full flex flex-col items-center justify-center py-10'>
            <div className='flex flex-col w-[80%] xl:w-[70%] xl:flex-row justify-center gap-4 '>
                <div className=" xl:w-1/3 w-full">
                    <BoxCustom
                        title='Thông tin cơ sỏ y tế'
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


                <div className="flex w-[full] xl:w-[100%] flex-col gap-4 ">
                    <BoxCustom
                        title='Thông tin lịch khám'
                        iconCol={false}
                        description={
                            <div className='flex flex-col'>
                                <DetailItem title='Chuyên khoa' content={'PHỔI'} />
                                <DetailItem title='Dịch vụ' content={'Khám dịch vụ'} />
                                <DetailItem title='Bác sĩ' content={'BS. Âu Dương'} />
                                <DetailItem title='Thời gian khám' content={'13:30 - 14:30 15/03/2024'} />
                                <DetailItem title='Tiền khám' content={'150.000 đ'} />
                            </div>
                        }
                    />
                    <BoxCustom
                        title='Thông tin bệnh nhân'
                        description={<DescriptionProfile />}
                    />
                    <div className="flex flex-row justify-between">
                        <Button
                            startIcon={<ArrowBackIosNewIcon />}
                            className='w-28' href="#text-buttons" onClick={() => navigate(-1)}>Quay lại</Button>
                        <Button
                            variant="contained"
                            className='w-36' href="#text-buttons" onClick={() => onClickPayment()}>Xác nhận</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentInfo;

