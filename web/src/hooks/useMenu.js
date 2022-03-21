import { useEffect, useState } from "react";
import recipesApi from "../api/recipesApi";
import { useHistory } from "react-router";

const useMenu = () => {
  const [allMenu, setAllMenu] = useState([]);
  const [allRecommendMenu, setAllRecommendMenu] = useState([]);
  const [allRejectMenu, setAllRejectMenu] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let tempRecommend = [];
    let tempReject = [];
    allMenu.map((menu) => {
      menu.status === "Approve"
        ? tempRecommend.push(menu)
        : tempReject.push(menu);
    });
    setAllRecommendMenu(tempRecommend);
    setAllRejectMenu(tempReject);
  }, [allMenu]);

  const refreshAllMenu = async () => {
    const { data } = await recipesApi().getAllMenu();
    setAllMenu(data);
    history.go(0);
  };

  const getAllMenu = async () => {
    const { data } = await recipesApi().getAllMenu();
    setAllMenu(data);
  };

  return {
    allMenu,
    allRecommendMenu,
    allRejectMenu,
    refresh: refreshAllMenu,
    getMenu: getAllMenu,
  };
};

export default useMenu;
