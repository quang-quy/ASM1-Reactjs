import { Card, CardHeader, CardText,Button, CardFooter,CardTitle,CardBody,Row,Col,Container  } from 'reactstrap';

import { STAFFS } from './shared/staffs';
import dateFormat from 'dateformat';
import { useState } from 'react';

import './App.css';


function App() {

  const [staffInfo, setStaffInfo] = useState(null)
console.log('staff', staffInfo)
  const renderStaffInfo = () => {
    return <Row>
      <Col className='col-5 p-1'>
        <Card className='staff-detail'>
        
          <CardBody>
            <img className='Teim' src={staffInfo.image}/>
            <b className='mb-3'>Họ và tên: {staffInfo.name}</b>
            <p>Ngày sinh: {dateFormat(staffInfo.doB)}</p>
            <p>Ngày vào công ty: {staffInfo.startDate}</p>
            <p>Phòng ban: {staffInfo.department.name}</p>
            <p>Số ngày nghỉ còn lại: {staffInfo.annualLeave}</p>
            <p>Số ngày đã làm thêm: {staffInfo.overTime}</p>
          </CardBody>
        </Card>
      </Col>
    </Row>
  }

  return (
    <div className="App">
      <Card>
        <CardHeader className='asm1-header'>
          Ứng dụng quản lí nhân sự v1.0
        </CardHeader>
        <CardBody>
            <Container>
            <Row>
              {STAFFS.map((s, idx) => <Col  key={idx} className="bg-light p-1" sm="4" lg="6" style={{cursor: 'pointer'}} onClick={() => setStaffInfo(s)}>
                <div className='border mx-auto'>
                  {s.name}
                </div>
              </Col>)}
            </Row>
            {
              staffInfo && renderStaffInfo()
            }
          </Container>  
        </CardBody>
        <CardFooter>
          Bấm vào tên nhân viên để xem thông tin
        </CardFooter>
      </Card>
      <h1>commit for fun</h1>
    </div>
    
  );
}

export default App;
