import { ServerItem } from "../../data-sctructure/interface"
import { UserStatus } from "../../data-sctructure/enums"
import { Button } from "antd"
import React from "react"
import { useCookies } from "react-cookie"

const CompServerDaemon = (props: { server: ServerItem }) => {
  const [cookie] = useCookies()
  if (cookie.username === props.server.username) {
    if (!props.server.isDaemon) {
      return <Button type="primary">托管</Button>
    }
    return (
      <Button type="primary" danger>
        释放
      </Button>
    )
  } else {
    return <></>
  }
}

export default CompServerDaemon
