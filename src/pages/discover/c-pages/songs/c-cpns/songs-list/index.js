import React, { useState, memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { PER_PAGE_NUMBER } from "../../store/constants";
import { getSongList } from "../../store/actionCreators";

import PigAndWifeThemeCover from "@/components/theme-cover";
import PigAndWifePagination from "@/components/pagination";
import { SongListWrapper } from "./style";

export default memo(function PigAndWifeSongsList() {
  // hooks
  const [currentPage, setCurrentPage] = useState(1);

  // redux
  const { categorySongs } = useSelector(
    (state) => ({
      categorySongs: state.getIn(["songs", "categorySongs"]),
    }),
    shallowEqual
  );
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;
  const dispatch = useDispatch();

  function onPageChange(page, pageSize) {
    setCurrentPage(page);
    dispatch(getSongList(page));
  }

  return (
    <SongListWrapper>
      <div className="songs-list">
        {" "}
        {songList.map((item, index) => {
          return (
            <PigAndWifeThemeCover info={item} key={item.id} right="30px" />
          );
        })}{" "}
      </div>{" "}
      <PigAndWifePagination
        currentPage={currentPage}
        total={total}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange}
      />{" "}
    </SongListWrapper>
  );
});
