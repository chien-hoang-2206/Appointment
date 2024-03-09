import BoxCustom from '../Box/Box';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import dayjs from 'dayjs';
import { Badge, Calendar } from 'antd';
import { Button } from '@mui/material';
import { getDate } from '../../utils/Utils';
import ButonOutLine from '../Button/ButonOutLine';

const getListData = (value) => {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                {
                    type: 'success',
                    start: '12:00',
                    content: '12:00 -15:00',
                },
            ];
            break;
        case 10:
            listData = [
                {
                    type: 'warning',
                    start: '12:00',
                    content: '12:00 -15:00',
                },
                {
                    type: 'success',
                    start: '12:00',
                    content: '12:00 -15:00',
                },
                {
                    type: 'error',
                    start: '12:00',
                    start: '12:00',
                    content: '12:00 -15:00',
                },
            ];
            break;
        case 15:
            listData = [
                {
                    type: 'warning',
                    start: '12:00',
                    content: '12:00 -15:00',
                },
                {
                    type: 'success',
                    start: '12:00',
                    content: '12:00 -15:00',
                },
                {
                    type: 'error',
                    start: '12:00',
                    content: '12:00 -15:00',
                },
                {
                    start: '12:00',
                    type: 'error',
                    content: '12:00 -15:00',
                },
                {
                    start: '12:00',
                    type: 'error',
                    content: '12:00 -15:00',
                },
                {
                    start: '12:00',
                    type: 'error',
                    content: '12:00 -15:00',
                },
            ];
            break;
        default:
    }
    return listData || [];
};


const ChooseDate = props => {
    const { goBack, value, onChange } = props
    function handleChange(date, time) {
        // onChange(date, time)
    }
    const [valueDate, setValueDate] = useState(() => dayjs());
    const [selectedValue, setSelectedValue] = useState();
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const handleDateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.start} />
                    </li>
                ))}
            </ul>
        );
    };
    const handlemonthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const onSelect = (newValue) => {
        setValueDate(newValue);
        setSelectedValue(getDate(newValue?.$d));
    };
    const onPanelChange = (newValue) => {
        setValueDate(newValue);
    };
    const handleClickShift = (shiftId) => {
        onChange(selectedValue, shiftId)
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

                <div className='w-full mt-4 lg:mt-0 flex flex-col gap-3 lg:w-full'>
                    <BoxCustom
                        title={<span className="text-xl">
                            Vui lòng chọn ngày khám / giờ khám
                        </span>}
                        description={
                            <div className='flex flex-col gap-2 w-full pt-3'>
                                {!selectedValue ?
                                    <Calendar
                                        dateCellRender={handleDateCellRender} monthCellRender={handlemonthCellRender}
                                        value={valueDate} onSelect={onSelect} onPanelChange={onPanelChange}
                                    />
                                    :
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-col gap-3'>
                                            <span className=' text-2xl font-bold'>
                                                Ngày khám đã chọn:
                                            </span>
                                        </div>
                                        <div className='flex flex-row gap-5 justify-start items-center'>
                                            <span className='text-2xl font-bold '>
                                                {selectedValue}
                                            </span>
                                            <div className='mt-2'>
                                                <ButonOutLine size='small' borderRadius={6} onClick={() => setSelectedValue(null)}>
                                                    Chọn lại
                                                </ButonOutLine>
                                            </div>
                                        </div>
                                        <span className='text-2xl font-bold' >
                                            Danh sách ca khám
                                        </span>
                                        <div className="flex flex-wrap gap-3">
                                            <ButonOutLine size='small' borderRadius={6} onClick={() => handleClickShift(12)}>
                                                13:30 - 14:30
                                            </ButonOutLine>
                                            <ButonOutLine size='small' borderRadius={6} onClick={() => handleClickShift(13)}>
                                                13:30 - 14:30
                                            </ButonOutLine>
                                            <ButonOutLine size='small' borderRadius={6} onClick={() => handleClickShift(14)}>
                                                13:30 - 14:30
                                            </ButonOutLine>
                                        </div>
                                    </div>
                                }
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

export default ChooseDate;