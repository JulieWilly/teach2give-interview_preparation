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
