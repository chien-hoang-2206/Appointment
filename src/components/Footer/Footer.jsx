
import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import logo from "../../assets/logo/LogoPage.png";
import fb from "../../assets/icon/icon-facebook.png";
import yt from "../../assets/icon/icon-youtube.png";
import isg from "../../assets/icon/icon-intagram.png";
import tt from "../../assets/icon/icon-tiktok.png";
const Footer = () => {
    return (
        <div className={'footer'}>
            <Row>
                <Col span={6}>
                    <Link to={"/"} className={["logo-wrap"]}>
                        <img className={'logo'} src={logo}></img>
                        <p className={["logo-text"]}>PGT24h</p>
                    </Link>
                    <p className={'address'}>
                        254 Nguyễn Văn Linh, PNam Dương,
                        <br /> QHải Châu, TPĐà Nẵng
                    </p>
                </Col>
                <Col span={6}>
                    <h3 className={'header'}>Về PGT24h</h3>
                    <p className={'content'}>
                        Câu chuyện về PGT24h <br /> Công việc
                    </p>
                </Col>
                <Col span={6}>
                    <h3 className={'header'}>Giải pháp</h3>
                    <p className={'content'}>
                        PGT24h Professional
                        <br /> PGT24h Review
                        <br />
                        PGT24h Commerce
                    </p>
                </Col>
                <Col span={6}>
                    <h3 className={'classesheader'}>Tài nguyên</h3>
                    <p className={'classescontent'}>
                        Trung tâm hỗ trợ
                        <br /> Nhận tư vấn
                        <br />
                        Blog
                        <br />
                        Chính sách bảo mật
                    </p>
                </Col>
            </Row>
            <hr width="90%" align="left" />
            <Row className={["footer-info"]}>
                <Col span={12} className='flex'>
                    <img src={fb}></img>
                    <img src={yt}></img>
                    <img src={isg}></img>
                    <img src={tt}></img>
                </Col>
                <Col span={4}>
                    <p>Hotline: </p>
                </Col>
                <Col span={8}>
                    <p>Email: </p>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;