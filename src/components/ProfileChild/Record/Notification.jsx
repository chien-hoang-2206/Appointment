import Box from '../../Box/Box';
import { useNavigate } from 'react-router-dom';
import { EditOutlined, DeleteOutlined, InfoOutlined } from '@ant-design/icons';
import DescriptionProfile from '../../Description/DescriptionProfile/DescriptionProfile';
import { useContext, useEffect, useState } from 'react';
import { forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';
import { Modal, Card } from 'antd';
import DetailItem from '../../DetailItem/DetailItem';
import IC1 from '../../../assets/icon/ic-avatar.svg'
import IC2 from '../../../assets/icon/ic-born.svg'
import IC3 from '../../../assets/icon/ic-contact.svg'
import IC4 from '../../../assets/icon/ic-personnal.svg'
import IC5 from '../../../assets/icon/ic-location.svg'
import IC6 from '../../../assets/icon/ic-nation.svg'
import IC7 from '../../../assets/icon/cmnd.svg'
import IC8 from '../../../assets/icon/ic-email.svg'
import IC9 from '../../../assets/icon/ic-nationnality.svg'

import Constants from '../../../utils/constants';
import Factories from '../../../services/FactoryApi';
import { AuthContext } from '../../../context/auth.context';
import { ToastDel, ToastInfo, ToastNoti, ToastNotiError, getDate } from '../../../utils/Utils';
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function createData(id, name, date, phone, gender, address, cmnd, email, job, nation, nationality) {
    return {
        id,
        name,
        date,
        phone,
        gender,
        address,
        cmnd,
        email,
        job,
        nation,
        nationality
    };
}

const data = [
    createData(1, 'Hoàng Văn Nam', '22/06/2001', '09201019111', '1', 'k44 nguyễn lương bằng, Phường Hòa Hiệp Bắc, Quận Liên Chiểu, Thành phố Đà Nẵng', '04410003343434', 'hoangvana@gmail.com', 'Kỹ sư công nghệ thông tin', 'Kinh', 'Việt Nam'),
    createData(2, 'Hoàng Văn Duy', '22/06/2001', '09201019111', '1', '10 Hà Văn Tính'),
    createData(3, 'Nguyễn Hồng Phú', '22/06/2001', '09201019111', '2', '10 Hà Văn Tính'),
];


const Notification = props => {
    const { isBooking = false, onClickBox } = props
    const navigator = useNavigate()
    const [open, setOpen] = useState();
    const [listData, setListData] = useState([]);
    const { user } = useContext(AuthContext);

    const [isModalOpen, setIsModalOpen] = useState(false);

    async function getListPatient() {
        const response = await Factories.getListPatient(
            {
                userId: user?.id
            }
        );
        if (response) {
            setListData(response)
        } else {
            ToastNotiError()
        }
    }
    useEffect(() => {
        getListPatient()
    }, [])
    const showModal = (item) => {
        setIsModalOpen(item);
    };

    const handleClickOpen = (id) => {
        setOpen(id);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDel = () => {
        console.log(open);
        /// xoas 
        setOpen(null);
    };
    const handleClickBox = (value) => {
        onClickBox(value)
    };
    const handleClicDelete = async (value) => {
        const response = await Factories.deletePatient(value)
        getListPatient()
        if (response?.message) {
            ToastDel('Đã xoá dữ liệu thành công')
        } else {
            ToastNotiError()
        }
    };

    return (
        <>
            <span className='font-bold text-xl'>
                Danh sách thông báo
            </span>
            <div className="mt-6 flex flex-col gap-4 w-[900px]">
                {listData?.map(item => {
                    return (
                        <div key={item.id}>
                            {/* <Box
                                onClick={() => handleClickBox(11111)}
                                description={

                                }
                            /> */}
                            <Card className='shadow-2xl' title="Xác nhận đặt lịch khám" bordered={false}>
                                Lịch khám Thai sản tại bệnh viên Nhi Hà Nội, ngày 22/4/2024 đã được xác nhận. Bệnh nhân chú ý đến đúng giờ để hoàn thành lượt khám.
                            </Card>
                        </div>
                    );
                })}
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Xác nhận xoá hồ sơ ?"}</DialogTitle>
                    {/* <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent> */}
                    <DialogActions>
                        <Button onClick={handleClose}>Huỷ bỏ</Button>
                        <Button onClick={handleDel}>Đồng ý</Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Xác nhận xoá hồ sơ ?"}</DialogTitle>
                    {/* <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent> */}
                    <DialogActions>
                        <Button onClick={handleClose}>Huỷ bỏ</Button>
                        <Button onClick={handleDel}>Đồng ý</Button>
                    </DialogActions>
                </Dialog>

                <Modal
                    title={<span className='text-xl font-bold text-blue'>Chi tiết hồ sơ</span>}
                    open={isModalOpen}
                    width={600}
                    onCancel={() => setIsModalOpen(null)}
                    footer=""
                >
                    <div className="flex flex-col gap-3">
                        <DetailItem icon={IC1} title='Họ và tên' content={isModalOpen?.fullName} />
                        <DetailItem icon={IC2} title='Ngày sinh' content={getDate(isModalOpen?.dateOfBirth)} />
                        <DetailItem icon={IC3} title='Số điện thoại' content={isModalOpen?.phone} />
                        <DetailItem icon={IC4} title='Giới tính' content={Constants.optionSex?.find(item => item.value === isModalOpen?.gender)?.label} />
                        <DetailItem icon={IC7} title='CMND' content={isModalOpen?.CCCD} />
                        <DetailItem icon={IC8} title='Email' content={isModalOpen?.email} />
                        <DetailItem icon={IC4} title='Nghề Nghiệp' content={isModalOpen?.job} />
                        <DetailItem icon={IC5} title='Địa chỉ' content={isModalOpen?.address} />
                        <DetailItem icon={IC6} title='Dân tộc' content={Constants.nationVN?.find(item => item.value === parseInt(isModalOpen?.nation))?.label} />
                    </div>

                </Modal>
            </div >
        </>
    );
};

export default Notification;