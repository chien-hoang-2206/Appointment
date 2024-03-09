import DetailItem from '../../DetailItem/DetailItem';
import IC1 from '../../../assets/icon/ic-avatar.svg'
import IC2 from '../../../assets/icon/ic-born.svg'
import IC4 from '../../../assets/icon/ic-personnal.svg'
import IC5 from '../../../assets/icon/ic-location.svg'
import IC6 from '../../../assets/icon/ic-gender.svg'
import IC7 from '../../../assets/icon/ic-speciality.svg'
import IC8 from '../../../assets/icon/ic-cal.svg'
import IC9 from '../../../assets/icon/ic-cost.svg'
import { Avatar } from 'antd';
import Constants from '../../../utils/constants';
const DescriptionDoctor = (props) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-2 w-[80%]">
                    <DetailItem icon={IC1}
                        styleTitle={'w-[400px]'}
                        title={<span className='text-yellow w-full ' > BS CKLL. Âu Thanh Dương</span>}
                        content={props?.data?.name}
                    />
                    <DetailItem icon={IC6} title='Giới tính' content={Constants.optionSex?.find(item => item.value === parseInt(props?.data?.gender))?.label} />
                    <DetailItem icon={IC7} title='Chuyên khoa' content={props?.data?.speciality} />
                </div>
                <div className="flex  justify-center  items-start w-[20%]">
                    <Avatar
                        style={{ height: 100, width: 100 }}
                        src={props?.data?.avatar ?? 'https://api.dicebear.com/7.x/miniavs/svg?seed=2'} />
                </div>
            </div>
            <div className="gap-2 flex flex-col">
                <DetailItem icon={IC8} title='Lịch khám' content={props?.data?.calendar} />
                <DetailItem icon={IC9} title='Giá khám' content={props?.data?.cost} />
            </div>
        </div>
    )
};



export default DescriptionDoctor;