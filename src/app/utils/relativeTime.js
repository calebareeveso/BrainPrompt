import moment from "moment/moment";
const lastUpdated = "20230501";
export default moment(lastUpdated, "YYYYMMDD").fromNow();
