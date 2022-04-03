import { Divider, Typography } from "antd"
import React from "react"
import "./style.scss"
const Title: React.FC<{ title: string, className?:string }> = ({ title,className }) => {
    return <div className={"w-100 "+className}>
        <Typography.Text className="header-title">{title}</Typography.Text>
        <Divider className="w-100 red" />
    </div>
}

export default React.memo(Title);