let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};
//Action là nơi mang các thông tin gửi từ ứng dụng đến Store, mô tả mình muốn làm cái gì với cái store này. Các thông tin này là 1 object mô tả những gì đã xảy ra. Action gồm 2 phần là type (kiểu mô tả action), và giá trị tham số truyền lên:


//Step 1. khởi tạo store cho project mà nó nhận tham số đầu vào là cartReducer 
//Step 2.: gọi action thông qua hàm dispatch của store, action là 1 object có type là 'ADD' hoặc 'REMOVE' như ở trên và không có tham số.
//Step 3. lúc này là nhiệm vụ của reducer, nó sẽ kiểm tra xem kiểu của action gửi lên là gì 'ADD' hoặc 'REMOVE' để nó return ra 1 new state cụ thể
let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };

      if (action.payload.checkboxValue) {
        console.log("ADD TO CART");

        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload], //tham số
          restaurantName: action.payload.restaurantName,
        };
      } else {
        console.log("REMOVE FROM CART");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      console.log(newState, "👉");
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
