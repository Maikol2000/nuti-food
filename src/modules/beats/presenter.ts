import * as beatsRepository from './repository';

const beatsPresenter = { ...beatsRepository };

// ở đây xử lý dữ liệu gửi lên backend và dữ liệu backend gửi về, dữ liệu backend gửi về có thể đc đưa lên store ở đây

export default beatsPresenter;