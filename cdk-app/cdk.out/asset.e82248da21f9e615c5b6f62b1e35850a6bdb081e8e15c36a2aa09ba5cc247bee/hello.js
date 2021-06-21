"use strict";
exports.handlers = async (event) => {
    console.log('event', JSON.stringify(event, null, 2));
    return {
        statusCode: 200,
        headers: { 'Content-Type': "text/plain" },
        body: "Hello from cdk-app-todo"
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWxsby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLEVBQUUsS0FBMEMsRUFBRSxFQUFFO0lBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3BELE9BQU87UUFDSCxVQUFVLEVBQUUsR0FBRztRQUNmLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUU7UUFDekMsSUFBSSxFQUFFLHlCQUF5QjtLQUNsQyxDQUFBO0FBQ0wsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5oYW5kbGVycyA9IGFzeW5jIChldmVudDogQVdTTGFtYmRhLkFQSUdhdGV3YXlBdXRob3JpemVyRXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBKU09OLnN0cmluZ2lmeShldmVudCwgbnVsbCwgMikpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiBcInRleHQvcGxhaW5cIiB9LFxuICAgICAgICBib2R5OiBcIkhlbGxvIGZyb20gY2RrLWFwcC10b2RvXCJcbiAgICB9XG59XG5cbiJdfQ==