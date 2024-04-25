// import GoogleMap from "components/map/GoogleMap";
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table, } from "reactstrap";
import constant from '../variables/constant';
const { Image_Url } = constant;
function Users() {

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let hour = 0;
    hours-12 > 0 ? hour=hours-12 : hour= hours;
    return `${day}-${month}-${year} ${hour}:${minutes}:${seconds}: ${hours-12 > 0 ? 'PM' : 'AM'}`;
}

  let usersData=[
    {name: "John",phone: "123", profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg'], created_at:'2024-04-22 09:11:46',latitude:'26.2657209',longitude:'72.9701266'},
    {name: "John",phone: "123", profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg'], created_at:'2024-04-22 12:11:46',latitude:'26.2657209',longitude:'72.9701266'},
    {name: "John",phone: "123", profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg'], created_at:'2024-04-22 14:11:46',latitude:'26.2657209',longitude:'72.9701266'},
    {name: "John",phone: "123", profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg'], created_at:'2024-04-22 23:11:46',latitude:'26.2657209',longitude:'72.9701266'},
  ]
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Registered User</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Details</th>
                      <th>Profile</th>
                      <th>Pics</th>
                      <th>Reg Date</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                  {usersData.map((item, index)=>(
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>sdf</td>
                      <td><img style={{width:'50px',height:'50px', borderRadius:'50%'}} src={`${Image_Url}/${item.profile}`} /></td>
                      <td >
                      { item.profiles.map((data, index)=>(
                      <img style={{width:'50px',height:'50px', borderRadius:'50%'}} src={`${Image_Url}/${data}`} />
                      ))}
                      </td>
                      <th>{formatDate(item.created_at)}</th>
                      <th><iframe width="200" height="150" frameBorder="0" style={{ border: 0 }} src={`https://www.openstreetmap.org/?mlat=${item.latitude}&mlon=${item.longitude}#map=15/${item.latitude}/${item.longitude}`} allowFullScreen ></iframe></th>
                    </tr>
                  ))}
                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Users;
