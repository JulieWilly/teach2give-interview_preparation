#Undestanding system design.

System design is a base concept in software engineerng that provides a procedural process of defining software architecture, modules, components, etc. It is an important aspect to consider when building scalable and reliable softwares.
During interviews, system desing is one of the keys concepts that interviewers test to check the interviewers ability to think about building application's architecture from scratch.

## Need for system desing.
Basically, system design is used to prepare the architecture of the software or an application, thus, it is necessary to design the system before writing the code.

System requirements (both functional and non-functional) higly influence the design of a system bacause developers have to prepare an architecture that fulfils the requirements. For instance, based on the data to be store for a specific application, the developer has to determine if they will use SQL or NoSQL databases. System design also enables developers to make the application scalable in case the traffic increases. One of the best solution to controlling traffic is having multiples servers in different locations to serve users nearest to them to make their application efficient.

## Essential Desing Methods in System Design.
System design provides developers with a wide range of design methods and techniques to choose from to design any systems architecture.

*Some of the design methods used are discussed below*

###1. Architectural Design.

- Architectural design is the base of design and it describes teh infrastructure, model, view, components, and interaction.
The design also includes client-server interaction, microservices etc.

### 2.ERD Diagrams.
- Also know as Entity Relationship diagrams. ERD diagrams are mainly used in designing application's database structures. In these diagrams, you can define multiple database schemas, add entities to each schema, and add multiple attributes for each entity. You can also connect entities of two different schemas if a relationship exists.

### 3. UML Diagrams.
- UML stands for Unified Modelling language. UML contains various diagrams like activity diagrams, class diagrams, sequence diagrams etc to represent the different models of the system.

### 4. Class Diagrams.

- Diagrams represents clases providing an overview fo the applications data and functionality.
Classes are composed of class attributes, methods, and relationships between multiple classes.

### 5. Sequence Diagram

- They are used to model behaviour of the system. They represent the interaction between the various components of the system and communications between the two.

# Diving Deeper into Systems Design Concepts
### 1. Performance versus Scalability.
- *Performance.*
Basically, performance refers to the ability of a system to handle high traffic and as well provided results to users in a very short time. Applications that take more time to load may get low traffic as users prefer to use applications that load within a fraction of a second.
- *Scalability* - Refers to the ability to scale an application to enhance its ability to handle more requests. This can be achieve my distributing load across multiple ervers or increasing a single server capacity.
### 2. Latency versus Throughput 
-  *latency* - is the measurement of time delay to complete a single request or data operations for seamless user experience. It is measured in `Milliseconds`.
- *Throughput* - refers to the number of operations the system can handle in a particular time. If a server has a low throughput, it can be scaled to make it more efficient. Throughput is measured in `megabytes (MB) per second`

### 3. Consistency Patterns and Availability Patterns.
- *Consistency* - Ensures that all nodes in the system read the same data at a particular time.
- *Availability* - For systems with high uptimes, availability is cricial as it ensures that each request receives a response either with fresh or old data.

#### *Consistency patterns*- 
- *Strong consistency* - Ensure that each request gets the most recent data. It enhances synchronized communication and prioritizes consistency over availabilty.

- *Eventual consistency* - it allows temporal inconsistencies to be resolved soon. Prioritize more on availability than to consistency.

- *Weak consistency* - Provides fresh data to users after writing the data. Applicable in live streaming as it focuses on fast access on data.

Some of the availability patterns include.
- *Load balancing* - is a scenario where data is distributed across multiple servers to achieve high availability.
- *Retry and timeout strategies* - the retry mechanism processes request after every interval if the system fails or is not available.


# Advanced concepts in System design.
### 1. CDN (Content Delivery Network.)

- majorly used to deliver cotent such as images, various data, etc from the server which are located in different geo locations.
- CDN delivers the resources faster, descreases latency(network delays) and improves the application's performance.
- Uses cached resources to deliver contents to users fast.
### 2. DNS
- DNS was was introduced to counter the issue of using IP addresses to access websites which were hard to remember.
- The DNS system allows users to access the website and its resources using the domain name. For instance, ```www.example.com```
- The DNS maps unique domain name with a unique IP addess. When a particular domain name is requsted, the DNS returns the  resources of IP addresses, which are mapped with the domain name.

### 3. Caching.
 - Also known as *High speed storage*. Caching works between web applications and the resouce of data to enhance serving the resources faster.
 - when requests for a resouces are made, the application checks if there data requested is in the cache storage. If it is not the resouce is requested from the database and stored in the cache storage then shared to the request.

 ### 4. Proxies / Proxy server.
 - functions between the client of the application and the internet. When resources are requested over the intenet, the proxy server gets the requested resources and sends them back to the application to respond to the request.


 # Components of System Design.

 ### 1. Microservices and Service Discovery.

 Microservices break down complex applications into small services such that each service works independently and acoomplishes a specific task.

 *Related conceps to microservices.*
 - Service Indentification - Each microservice has a unique ID and name for its identification.
 - Dynamic Service Discovery - Microservices can dynamically find other services located in the same network thus enhancing scaling and load balancing.


### 2. Database Systems : RDBMS and NoSQL
There are two primary cartegories of databases.

#### RDBMS - Relational Database Management System.
- RDBMS databases are convinient for storing structured data.
- SQL databases are built on top of the RDBMS.


*Characteristics*
- RDBMS stores data in table format.
- SQL is a query language for the RDBMS databases.
- Accessing data from the RDBMS is slow.
- You can't scale the RDBMS database horizontally, but you can scale it verically.

#### NoSql - Non - SQL database.
- NoSQL databases store data in key-value pair instead of in table format.
- They are convinient for storing unstructured data in databases.

*Characteristics.*
- It stores data in key-value pair format.
- NoSql database is horizontally scalable.
- Records can contain different key-value pairs.
- It is faster than RDBMS databases.
- It supports changes in the database.

### 3. Communicaton Protocols.
*Protocol* - rules to communicate or guideliness for data exchange between two systems.

*Various communication protocols include.*

- *HTTP/HTTPS* - HyperText Transfer Protocol.
They are used in web-based communications. HTTPS is more secure compared to HTTP.

- *TCP/IP* -  Transmission control Protocol. 
Used to communicate over the internet for instance in messaging applications.

- *UDP* - User Datagram Protocol. Maily used in live streaming, video calls etc in which data loss can be tolerable.

- *WebSockets* - They are applied for bi-directional duplex communication. It builds the connection between two web applications.


# Approaching System Design Interview Questions

## Step - by - step guide on how to Approach System Design interview Questions.

### 1. Requirements Clarifications.
- For any system, there exists two cartegories of requirements that are important to know. 
- The requirements are functional requirements and non-functional requirements.
- *Functional requirements* -  
These are the requirements in the application with which the users interacts with. For example - authentication, payments services integration.
- *Non-function requirements* - Requirements that focus on improving the systems capabilities. For example - high availability, scalability, consistency and high-throughput.

### 2. Estimation of resources.
- Next step is determining what kind of resource you should use to build the application.
 
 - For instance, it would be crucial to be carefu when selecting the resources for the server, as you should keep in mind how many requests the server will receive per day or second and also the kind of data that will be stored in the database.

 ### 3. System interface definition.
 - This step requires designing of the system interface for instance defining the API endpoints and what to expect from each API endpoint.
 For example, ```sendNotification(userId, message,...);```

 ### 4. Defining data models.
 - This step involves selecting the correct database for your application.
 - You can select relationald database for storing structured data or NoSQL database for storing unstructured data

 ### 5. High level design.
 - This step requires one to determine how they will connect the components of the system with each other. For example, how to connect the database with the server, connecting the server with the client devices.
 - Most of the functional requirements are fulfilled in this step.

 ### 6. Detailed design.

- This step involves advancing on the basic design that you have come up with. Deeper analysis of the system is required to fulfill the functional and the non-functional requirements.
*You can make some of the analyses listed below.*
- analyse on how to use caching to improve on the performance of the application.
- Determine if you should use CDN for caching or are cookies sufficient.

- Make an analysis on how you would handle failure in the application.
- Determine on how you would replicate the database.
### 7. Identifying and resolving bottlenecks.
- Identify bottlenecks in the design early and come up with solutions to resolve them with the interviewer.

- for example, for a scenarion where the system would fail, provide a solution on how you would go about handling the failure and restoring users sessions.

# Sample System Desing Interview Questions and Solution.

### 1. How would you design a URL shortening service similar to TinyURL?
URL shortening service allows users to shorten the long URLs to short URLs which works the same as the long URL.

>>*Requirements clarification.*
- When a long URL is provided as the input, the output should be a shortened URL.
- When one clicks on the short URL, it should redirect them to the original URL
- Track no of clicks on the URL.

>>*Approach*
To provide an approach on how to go about that, discuss some of the issues below.
- Discuss on how you will handle the 500 requests every second via load balancing.
- Discuss on how will you prepare a table for relational database to map long URLs with short URLs.

### 2. How would you design Facebook and Instagram?
When given such a question, you are required to build a social media application.
>> *Requirements:*
- Design user singup and signin
- Allow users to pusblish posts and short videos.
- Design for direct messaging.
- Design to allow users to see trending posts in the feed.

>> *Approach:*
- Discuss on how you would handle the relationships between users in the database.
- Discuss on how you will implement user authentication for secure loggin in the application.
- Discuss database replication to handle failures and ACIP properties.
-Discuss data caching and load balancing.