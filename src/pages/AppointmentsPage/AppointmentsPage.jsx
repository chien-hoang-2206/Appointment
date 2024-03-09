import { Button } from '@mui/material';
import Box from '../../components/Box/Box';
import CustomTable from '../../components/CustomTable/CustomTable';
import DescriptionProfile from '../../components/Description/DescriptionProfile/DescriptionProfile';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import BoxCustom from '../../components/Box/Box';
import DetailItem from '../../components/DetailItem/DetailItem';

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
const AppointmentsPage = () => {
    const navigate = useNavigate();
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
                                <DetailItem title='Bác sĩ' content={'BS Âu Dương'} />
                                <DetailItem title='Thời gian khám' content={'13:30 - 14:30 15/03/2024'} />
                                <DetailItem title='Tiền khám' content={'150.000 đ'} />
                            </div>
                        }
                    />
                    <BoxCustom
                        title='Thông tin bệnh nhân'
                        description={<DescriptionProfile />}
                    />
                    <BoxCustom
                        title='Chẩn đoán của bác sĩ'
                        description={<>
                            Chẩn đoán của bác sĩ
                        </>}
                    />
                    <div className="flex flex-row justify-between">
                        <Button
                            startIcon={<ArrowBackIosNewIcon />}
                            className='w-28' href="#text-buttons" onClick={() => navigate(-1)}>Quay lại</Button>
                    </div>
                </div>
            </div>
        </div>

        // <div className='w-full flex flex-col items-center justify-center py-10'>
        //     <div className='flex flex-col justify-center gap-4 w-[1000px]'>
        //         <Box
        //             title='Thông tin lịch khám'
        //             description={<CustomTable isShowPagination={false} headCells={headCells} rows={rows} />}
        //         />
        //         <Box
        //             title='Thông tin sức khoẻ'
        //             description={<CustomTable isShowPagination={false} headCells={headCells} rows={rows} />}
        //         />
        //         <Box
        //             title='Thông tin bệnh nhân'
        //             description={<DescriptionProfile />}
        //         />
        //         <Button
        //             startIcon={<ArrowBackIosNewIcon />}
        //             className='w-28' href="#text-buttons" onClick={() => navigate(-1)}>Quay lại</Button>
        //     </div>
        // </div>
    );
};

export default AppointmentsPage;