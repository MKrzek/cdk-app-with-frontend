"use strict";
exports.handler = async (event) => {
    console.log('event', JSON.stringify(event, null, 2));
    return {
        statusCode: 200,
        headers: { 'Content-Type': "text/plain" },
        body: "Hello from cdk-app-todo"
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWxsby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBMEMsRUFBRSxFQUFFO0lBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3BELE9BQU87UUFDSCxVQUFVLEVBQUUsR0FBRztRQUNmLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUU7UUFDekMsSUFBSSxFQUFFLHlCQUF5QjtLQUNsQyxDQUFBO0FBQ0wsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5oYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBBV1NMYW1iZGEuQVBJR2F0ZXdheUF1dGhvcml6ZXJFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdldmVudCcsIEpTT04uc3RyaW5naWZ5KGV2ZW50LCBudWxsLCAyKSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6IFwidGV4dC9wbGFpblwiIH0sXG4gICAgICAgIGJvZHk6IFwiSGVsbG8gZnJvbSBjZGstYXBwLXRvZG9cIlxuICAgIH1cbn1cblxuIl19