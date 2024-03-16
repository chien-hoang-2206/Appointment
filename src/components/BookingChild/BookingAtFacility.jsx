import { Pagination } from "@mui/material";
import InputSearch from "../Input/InputSearch";
import CardCustom from "../Card/CardCustom";
import ButonBooking from "../Button/ButonBooking";
import ButonOutLine from "../Button/ButonOutLine";
import { useState } from "react";
import BG1 from '../../assets/images/bg-book.png'
import IcLocation from '../../assets/icon/ic-location.svg'

const BookingAtFacility = (props) => {
    const { type, onChangeFacility } = props
    const [page, setPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleClickFacility = (id) => {
        onChangeFacility(1)
    };
    return (
        <div className="flex flex-col w-full bg-blue3 ">
            <div className="flex py-24 h-[300px]" style={{ background: `url(${BG1})`, backgroundSize: 'cover' }}>
                <div className='w-full flex flex-col items-left justify-start px-[20%] ' >
                    <div className="bg-[#fff] flex flex-col gap-3 w-[850px] cursor-pointer text-left p-8  rounded-3xl border border-[#fff] shadow-md">
                        <span className="flex flex-col text-4xl font-bold text-blue2">
                            Đặt khám theo  {`${parseInt(type) === 1 ? 'cơ sở' : 'bác sĩ'}`}
                        </span>
                        <span className="text-2xl  text-gray w-full leading-10">
                            Đặt khám nhanh chóng, tiết kiệm thời gian, an toàn tiện lợi
                        </span>
                    </div>
                </div >
            </div>

            <div className="flex flex-col justify-center items-center mt-14">
                <InputSearch />
                <div className="max-w-[95%] 2xl:max-w-[70%]  grid grid-cols-1 xl:grid-cols-2 gap-4 py-12 sm:w-full  rounded-2xl ">
                    <CardCustom
                        title='Bệnh viện Đại học Y Dược TP.HCM'
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                        content={
                            <span className="flex flex-row gap-1 justify-start items-start">
                                <img src={IcLocation} className="mt-1" />
                                {`Cơ sở 201 Nguyễn Chí Thanh, Phường 12, Quận 5, TP. Hồ Chí Minh`}</span>
                        }
                        footer={
                            <div className="flex mt-4 flex-row justify-center gap-2 items-center">
                                <ButonBooking onClick={() => handleClickFacility()} />
                                <ButonOutLine> Xem chi tiết</ButonOutLine>
                            </div>
                        }
                    />
                    <CardCustom
                        title='Bệnh viện Đại học Y Dược TP.HCM'
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                        content={
                            <span className="flex flex-row gap-1 justify-start items-start">
                                <img src={IcLocation} className="mt-1" />
                                {`Cơ sở 201 Nguyễn Chí Thanh, Phường 12, Quận 5, TP. Hồ Chí Minh`}</span>
                        }
                        footer={
                            <div className="flex mt-4 flex-row justify-center gap-2 items-center">
                                <ButonBooking />
                                <ButonOutLine> Xem chi tiết</ButonOutLine>
                            </div>
                        }
                    />
                    <CardCustom
                        title='Bệnh viện Đại học Y Dược TP.HCM'
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                        content={
                            <span className="flex flex-row gap-1 justify-start items-start">
                                <img src={IcLocation} className="mt-1" />
                                {`Cơ sở 201 Nguyễn Chí Thanh, Phường 12, Quận 5, TP. Hồ Chí Minh`}</span>
                        }
                        footer={
                            <div className="flex mt-4 flex-row justify-center gap-2 items-center">
                                <ButonBooking />
                                <ButonOutLine> Xem chi tiết</ButonOutLine>
                            </div>
                        }
                    />
                    <CardCustom
                        title='Bệnh viện Đại học Y Dược TP.HCM'
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                        content={
                            <span className="flex flex-row gap-1 justify-start items-start">
                                <img src={IcLocation} className="mt-1" />
                                {`Cơ sở 201 Nguyễn Chí Thanh, Phường 12, Quận 5, TP. Hồ Chí Minh`}</span>
                        }
                        footer={
                            <div className="flex mt-4 flex-row justify-center gap-2 items-center">
                                <ButonBooking />
                                <ButonOutLine> Xem chi tiết</ButonOutLine>
                            </div>
                        }
                    />
                    <CardCustom
                        title='Bệnh viện Đại học Y Dược TP.HCM'
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                        content={
                            <span className="flex flex-row gap-1 justify-start items-start">
                                <img src={IcLocation} className="mt-1" />
                                {`Cơ sở 201 Nguyễn Chí Thanh, Phường 12, Quận 5, TP. Hồ Chí Minh`}</span>
                        }
                        footer={
                            <div className="flex mt-4 flex-row justify-center gap-2 items-center">
                                <ButonBooking />
                                <ButonOutLine> Xem chi tiết</ButonOutLine>
                            </div>
                        }
                    />
                </div>
                <Pagination className="pb-8" count={10} component="div" onChange={(e, page) => handleChangePage(e, page)} showFirstButton showLastButton />
            </div>
        </div>

    );
};

export default BookingAtFacility;