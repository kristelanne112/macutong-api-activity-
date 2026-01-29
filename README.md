# RESTful API Activity - [MacutongKristelAnneL._3D]

## Best Practices Implementation

### 1. Environment Variables
Question: Why did we put BASE URI in environment variables instead of hardcoding it?  
Answer:
We use environment variables for the BASE URI to make the application flexible and secure.  
- It allows different environments (development, testing, production) to use different endpoints without changing the code.  
- It prevents sensitive data like API keys or database URIs from being exposed in the code.



### 2. Resource Modeling
**Question:** Why did we use plural nouns (e.g., `/dishes`) for our routes?  
Answer:  
Using plural nouns is a REST convention that represents collections of resources.  
- It makes URLs intuitive and consistent (e.g., `/dishes` contains multiple dish objects).  
- Singular nouns are usually reserved for accessing one specific resource (e.g., `/dish/1`).

---

### 3. Status Codes
Question 1: When do we use 201 Created vs 200 OK?  
Answer: 
- `201 Created` → Used when a new resource is successfully created (e.g., POST `/dishes`)  
- `200 OK` → Used when a request successfully retrieves data or updates an existing resource (e.g., GET or PUT requests)  

**Question 2:** Why is it important to return `404` instead of just an empty array or a generic error?  
Answer:* 
Returning `404 Not Found` clearly informs the client that the requested resource does not exist.  
- It helps revent confusion between “resource exists but empty” vs “resource doesn’t exist.”  
- It allows clients to handle errors properly and improves API reliability.

---

### 4. Testing
(Paste a screenshot of a successful GET request here)
[Successful GET Request](screenshot.png)
