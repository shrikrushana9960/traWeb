import React,{useState,useEffect} from 'react'
import Traffic from './Traffic'
import {Row,Col,} from "antd";
import HPlatform, { HMap, HMapPolyLine } from "react-here-map";
import { PageHeader } from "antd";

import { DisplayMapFC } from "./DisplayMapFc";

const Home = () => {
    const [traffic,setTraffic] = useState(false)
    
    useEffect(()=>{
      const getData = async () => {
        const response = await fetch("https://traapi.herokuapp.com/user/tra");
        const data = await response.json();
        console.log(data.message[0].value);
        const value=data.message[0].value;
        if(value>20)
        {
          setTraffic(true)
        }
        else
        {
            setTraffic(false)
        }
      }
      getData()
     },[])
  
    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="Pune Signals"
          subTitle="Pune-Highways"
        />
        <DisplayMapFC />
        <Row>
          <Col span={8}>
            <Traffic
              title="Shastrinagar signal"
              name="Pune-Nagar Hightway"
              src="https://mittalbuilders.com/wp-content/uploads/2020/12/Reasons-to-settle-down-in-Pune.png"
              color={traffic ? "red" : "green"}
              status={traffic ? "Traffic is high" : "Traffic is low"}
              data="fastest route"
              pin="411006"
            />
          </Col>
          <Col span={8}>
            <Traffic
              title="Yerwda signal"
              name="Pune-Nagar Hightway"
              src="https://tma-live.s3.ap-south-1.amazonaws.com/referenceArtworks/1580357312166/34e275d646cce85ef6b1df7340a36cbc.jpg"
              color="Blue"
              status="light traffic"
              data="Comfertable route"
              pin="411006"
            />
          </Col>
          <Col span={8}>
            <Traffic
              title="ShivajiNagar signal"
              name="Pune-Nashik Hightway"
              src="https://images.moneycontrol.com/static-mcnews/2020/04/Pune-770x433.jpeg?impolicy=website&width=770&height=431"
              color="red"
              status=" traffic"
              data="longest route"
              pin="411006"
            />
          </Col>
          <Col span={8}>
            <Traffic
              title="VimanNagar signal"
              name="Pune-Nagar Hightway"
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/pune_1200x768.jpeg?NMyYO.z9p8xK8PxRSXaAjExzUcoB5Orr&size=770:433"
              color="Red"
              status=" traffic"
              data="longest route"
              pin="411006"
            />
          </Col>
          <Col span={8}>
            <Traffic
              title="Wagoli signal"
              name="Pune-Nagar Hightway"
              src="https://mumbaimirror.indiatimes.com/photo/74754859.cms"
              color="green"
              status="No traffic"
              data="fastest route"
              pin="411006"
            />
          </Col>
        </Row>
      </div>
    );
}

export default Home
