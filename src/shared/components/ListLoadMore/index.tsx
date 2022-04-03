import React, { useEffect, useState } from "react";
import { useAsync } from "@shared/hook/useAsync";
import { List, ListProps } from "antd";
import { Spin } from "antd";
import InfiniteScroll from "react-infinite-scroller";

interface IList extends ListProps<any> {
  apiService?: any;
  filter?: any;
  pageSize?: number;
  pageStart?: number;
  classNameMain?: string;
}

const _ListLoadMore: React.FC<IList> = ({
  apiService,
  pageSize = 7,
  pageStart = 1,
  classNameMain = "",
  ...props
}) => {
  const [apiCall] = useAsync(apiService);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [pageTotal, setPageTotal] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [resetStartPage, setResetStartPage] = useState(false);
  useEffect(() => {
    if (apiCall != null) {
      setIsLoading(true);
      apiCall
        .execute(
          {
            pageSize: pageSize,
            current: pageStart,
          },
          { filter: { ...props.filter } }
        )
        .then(({ data, info }) => {
          setDataSource(data);
          setPageTotal(info.totalPages);
          setResetStartPage(!resetStartPage);
          setIsLoading(false);
        });
    } else {
      setDataSource(props?.dataSource || []);
    }
  }, [props.filter]);

  const handleInfiniteOnLoad = (page) => {
    setIsLoading(true);
    if (pageTotal < page) {
      setIsLoading(false);
      return;
    } else {
      apiCall
        .execute(
          {
            pageSize: pageSize,
            current: page,
          },
          { filter: props.filter }
        )
        .then(({ data, info }) => {
          setDataSource((oldData) => oldData.concat(data));
          setIsLoading(false);
        });
    }
  };
  return (
    <div className={`infinite-container ${classNameMain}`}>
      <InfiniteScroll
        initialLoad={false}
        pageStart={pageStart}
        loadMore={handleInfiniteOnLoad}
        hasMore={isLoading}
        useWindow={false}
        loader={
          <div className="text-center">
            <Spin />
          </div>
        }
        resetStartPage={resetStartPage}
      >
        <List {...props} dataSource={dataSource} />
      </InfiniteScroll>
    </div>
  );
};

export const Item = List.Item;

export default React.memo(_ListLoadMore);
