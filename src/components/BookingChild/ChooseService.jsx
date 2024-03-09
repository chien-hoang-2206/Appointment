import PropTypes from 'prop-types';
import BoxCustom from '../Box/Box';
import InputSearch from '../Input/InputSearch';
import DescriptionDoctor from '../Description/DescriptionDoctor/DescriptionDoctor';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CustomTable from '../CustomTable/CustomTable';
import { convertStringToNumber } from '../../utils/Utils';
import ButonOutLine from '../Button/ButonOutLine';
import ButonBooking from '../Button/ButonBooking';


function createData(stt, id, name, cost) {
    return {
        stt,
        id,
        name,
        cost
    };
}

const rows = [
    createData(1, 1, 'Khám dịch vụ', 100000),
    createData(2, 2, 'Khám tổng quan', 200000),
    createData(3, 3, 'Khám nội soi', 300000),
];


const ChooseService = props => {
    const { goBack, value, onChangeService } = props
    function handleChangService(id) {
        console.log("🚀 ~ handleChangService ~ id:", id)
        onChangeService(id)
    }

    const headCells = [
        {
            id: 'stt',
            numeric: false,
            disablePadding: false,
            label: '#',
            width: 20,
            fontWeight: 'bold',
            align: 'left',
            component: (data, index) => {
                return (
                    <div >{index}</div>
                )
            }
        },
        {
            id: 'name',
            width: 160,
            align: 'left',
            disablePadding: false,
            label: 'Tên dịch vụ',
        },
        {
            id: 'cost',
            align: 'right',
            numeric: true,
            disablePadding: false,
            money: true,
            label: 'Giá tiền',
            component: (data) => {
                return (
                    <div>{convertStringToNumber(data?.cost)}</div>
                )
            }
        },
        {
            id: 'detail',
            numeric: true,
            width: 120,
            align: 'right',
            disablePadding: false,
            label: '',
            component: (data) => {
                return (
                    <ButonOutLine size='small' borderRadius={8} onClick={() => handleClickBook()}> Chi tiết</ButonOutLine>
                )
            }
        },
        {
            id: 'book',
            numeric: true,
            align: 'right',
            disablePadding: false,
            width: 120,
            label: '',
            component: (data) => {
                return (
                    <ButonBooking size='small' borderRadius={8} onClick={() => handleChangService(data?.id)}> Đặt khám ngay</ButonBooking>
                )
            }
        },
    ];

    return (
        <div className="flex flex-col w-full bg-blue3 justify-center items-center ">
            <div className=" py-24 w-[60%] md:gap-4 md:flex-col lg:flex lg:flex-row justify-start items-start lg:gap-5">
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
                            Vui lòng chọn dịch vụ
                        </span>}
                        description={
                            <div className='flex flex-col gap-2 w-full pt-3'>
                                {/* <InputSearch
                                    className="border rounded-md border-gray-light w-full "
                                    placeholder='Tìm kiếm chuyên khoa'
                                /> */}
                                <CustomTable headCells={headCells} rows={rows} handleClickRow={() => { }} />
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

export default ChooseService;