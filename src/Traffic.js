import React from 'react'
import { Card,Tag,Badge } from "antd";

const { Meta } = Card;

const Traffic = ({title,src,color,status,data,name,pin}) => {
    return (
      <div style={{margin:"10px",display:"flex",justifyContent:"center",alignItems:"Center"}}>
          
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src={src}
            />
          }
        >
          <Meta title={title} description={name} />

          <Tag style={{margin:"10px"}} color={color}>{status}</Tag>

          <h3>Pin: {pin}</h3>
        </Card>
     
      </div>
    );
}

export default Traffic
