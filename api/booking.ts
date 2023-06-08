import {AzureFunction, Context, HttpRequest} from "@azure/functions";

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest
): Promise<void> {
	// Access the form data from the request body
  const formData = req.body;
  console.log(formData)

	// Do something with the form data
	// For example, save it to a database or process it in any way you need

	// Return a response
	context.res = {
		status: 200,
		body: {message: "Form data received successfully"},
		headers: {
			"Content-Type": "application/json",
		},
	};
};

export default httpTrigger;
