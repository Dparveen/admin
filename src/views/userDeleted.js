import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table, } from "reactstrap";
import constant from '../variables/constant';
const { Image_Url } = constant;
function UsersDeleted() {
  let usersData=[
    {name: "John",phone: "123", profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg']},
    {name: "John",phone: "123", profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg']},
    {name: "John",phone: "123", profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg']},
    {name: "John",phone: "123", profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg']},
  ]
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Deleted User</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Profile</th>
                      <th>Pics</th>
                      <th>R Date</th>
                      <th>D Date</th>
                    </tr>
                  </thead>
                  <tbody>
                  {usersData.map((item, index)=>(
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td><img style={{width:'50px',height:'50px', borderRadius:'50%'}} src={`${Image_Url}/${item.profile}`} /></td>
                      <td >
                      { item.profiles.map((data, index)=>(
                      <img style={{width:'50px',height:'50px', borderRadius:'50%'}} src={`${Image_Url}/${data}`} />
                      ))}
                      </td>
                      <td>Reg Date</td>
                      <td>Deleted</td>
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

export default UsersDeleted;
