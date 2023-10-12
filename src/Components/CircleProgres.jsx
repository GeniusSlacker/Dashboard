import { Progress, Space } from 'antd';

function CircleProgres() {
    const twoColors = {
        '0%': 'orange',
        '100%': 'orange',
    };
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '3.5rem'
        }}>
            <Space wrap>
                <div style={{ position: 'relative', }} > <p style={{
                    position: 'absolute',
                    top: '-30px',
                    left: '50px',
                    width: '60px',
                    color: 'rgb(9, 56, 128)',
                    fontWeight:'700'
                }}>4 weeks</p>
                    <Progress type="circle" percent={80} strokeWidth={11} size={140} gapDegree={2} strokeColor={twoColors} strokeLinecap='round' /> </div>
            </Space>


            <Space wrap>
                <div style={{
                    position: 'relative'
                }}>
                    <p style={{
                        position: 'absolute',
                        top: '-100px',
                        left: '56px',
                        width: '60px',
                        color: 'rgb(9, 56, 128)',
                        fontWeight:'700'
                    }}>8 weeks</p>
                </div>
                <Progress type="circle" status='success' gapDegree={10} size={140} percent={88} strokeWidth={11} format={(percent) => `${percent}%`} />

            </Space>
            <Space wrap>
                <div style={{
                    position: 'relative'
                }}> <p style={{
                    position: 'absolute',
                    top: '-100px',
                    left: '50px',
                    width: '65px',
                    color: 'rgb(9, 56, 128)',
                    fontWeight:'700'
                }}>12 weeks</p> </div>
                <Progress type="circle" gapDegree={10} percent={95} size={140} status='success' strokeWidth={11} format={(percent) => `Yes ${percent}%`} />

            </Space>
        </div>
    )
}

export default CircleProgres;


