data = "global data";

// このreturnThisDataに代入される関数の形をアロー関数に変えて"global data"が表示されるようにしてください
const returnThisData = () => {
  // ↓関数の中の処理は変更しないでください
  return this.data;
};

const object = {
  data: "object data",
  func: returnThisData,
};

function getData() {
  return object.func();
}

// ## ポイント
// - 通常の関数とアロー関数のthisの違い
//   - 通常の関数は呼び出し元のオブジェクト（object.data）を参照するが、アロー関数はグローバルオブジェクトを参照する
