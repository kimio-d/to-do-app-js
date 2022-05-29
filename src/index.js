import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // divタグの子要素に各要素を設定
  div.appendChild(li);

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    deleteFromIncompleteList(completeTarget);

    // 完了リストに追加する要素
    const text = completeTarget.firstElementChild.innerText;
    // div以下の初期化
    completeTarget.textContent = null;
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    completeTarget.appendChild(li);

    // 戻すボタン
    const resetButton = document.createElement("button");
    resetButton.innerText = "戻す";
    resetButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const resetTarget = resetButton.parentNode;
      document.getElementById("complete-list").removeChild(resetTarget);

      // テキスト取得
      const text = resetButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    completeTarget.appendChild(resetButton);

    document.getElementById("complete-list").appendChild(completeTarget);
  });
  div.appendChild(completeButton);

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
