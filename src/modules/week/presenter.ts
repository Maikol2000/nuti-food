import store from "@core/store/redux";
import * as weekRepository from "./repository";
import weekStore from "./weekStore";

const weekPresenter = { ...weekRepository };
weekPresenter.getListWeek = async () => {
    const data = await weekRepository.getListWeek();
    store.dispatch(weekStore.actions.updateWeekList(data))
    return data;
};
export default weekPresenter;
