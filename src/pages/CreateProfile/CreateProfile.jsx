import { useParams } from "react-router-dom";
import Box from "../../components/Box/Box";
import UpdateProfile from "../../components/Description/UpdateProfile/DescriptionBill";
const CreateProfilePage = () => {
   
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[1000px] py-10 flex flex-col justify-center items-center">
                <Box
                    title={<span className="text-2xl">Tạo mới thông tin bệnh nhân</span>}
                    alignTitle='center'
                    isCanHover={false}
                    description={<UpdateProfile/>}
                />
            </div>
        </div>
    );
};

export default CreateProfilePage;