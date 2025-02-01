<header>

<!--
  <<< Author notes: Course header >>>
  Include a 1280×640 image, course title in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Add your open source license, GitHub uses MIT license.
-->

# Implementing the 32k Database Page Size in Windows Server 2025 for Enhanced Scalability

Applied to: Windows Server 2025

</header>

<!--
  <<< Author notes: Course start >>>
  Include start button, a note about Actions minutes,
  and tell the learner why they should take the course.
-->

## Welcome

Windows Server 2025 introduces a significant enhancement to Active Directory Domain Services (AD DS) with the introduction of a 32k database page size. This upgrade aims to improve the scalability of AD DS, especially in environments with large volumes of objects or frequent modifications. By increasing the page size from the previous 8k to 32k, the frequency of page splits is reduced, minimizing database fragmentation and enhancing overall performance. This results in lower overhead for database management, making AD DS more efficient in large-scale deployments. 

## Implementation Steps:

Prepare the Environment: Perform a complete backup of the current AD database to ensure data safety. 
Adjust the Page Size: Adjust the page size. This process is irreversible, emphasizing the importance of the initial backup. 
Testing: Conduct thorough testing in a non-production environment to ensure stability and minimize the risk of disruption during the transition. 
Restart: Be prepared for a complete restart of directory services as part of the process. 

## Detailed Steps:

Registry Modification: Open the Registry Editor (regedit). 

Navigate to HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters.   Create a new DWORD (32-bit) value named Database Page Size and set its value to 32768 (decimal). 
Restart the server. 

![image](https://github.com/user-attachments/assets/859e6c1d-5b96-4905-a020-39d61ff25ae2)



2.  Enable the Feature: Open PowerShell or Terminal with administrative privileges. 

Execute the following command, replacing placeholders with your server and domain names:

$params = @{

 Identity = 'Database 32k pages feature'

 Scope = 'ForestOrConfigurationSet'

 Server = 'your_server_name'  # use your server name, example ‘dc1’

 Target = 'your_domain_name' # use your domain name ,example ‘jinish.com'

}

Enable-ADOptionalFeature @params

You may receive the below warning. Press enter to continue. 

 ![image](https://github.com/user-attachments/assets/656a039b-415f-4e1b-a7f2-5d497c605ae1)



Confirm the action when prompted. 

 
![image](https://github.com/user-attachments/assets/2ec1ba8c-d48d-41c4-9e39-c76625c24c8a)

 


Verification:

![image](https://github.com/user-attachments/assets/1646c4fa-6aa3-4746-bc96-e6945fe4bd0c)


Open Event Viewer by typing "Event Viewer" in the Start menu search bar.   Navigate to Applications and Services Logs -> Directory Service.   Check the logs for Event ID 2404, which indicates that the Active Directory Domain Services server now supports the "Database 32k Pages Feature" optional feature. 




# Technical Insights:

The increase in page size allows for the storage of larger directory objects and accommodates up to 3,200 values in multi-valued attributes. 
While new domain controllers will default to the 32k page size, they retain support for the legacy 8k page mode for compatibility within mixed environments. 
The transition to the 32k page size is managed at the forest level, allowing for a gradual and controlled upgrade process. 
This enhancement is particularly beneficial in environments with complex directory structures and extensive attribute usage. 

# Benefits:

Improved scalability for large environments. 
Reduced database fragmentation. 
Enhanced performance for AD DS operations. 
Optimized replication, backup, and recovery processes. 

By following these steps and considering the technical insights, organizations can effectively implement the 32k database page size in Windows Server 2025 and leverage the associated benefits for their AD DS environment.
