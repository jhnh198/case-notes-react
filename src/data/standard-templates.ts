/* 
Structure of a template:

id: "",
label: "",
bodyTitle: "Solution/ Troubleshooting:",
templateText: "",
escalationText: "",

todo: set up an array that can call different functions to set the state of the notes object
 */

export const StandardTemplates = [
  {
    id: "dsn-pending-new-template",
    label: "DSN: to Pending and OTAP OBC to Current",
    bodyTitle: `Symptom/Issue: Add New DSN To Pending / OTAP OBC to Current`,
    templateText: `      
    
    Solution/Troubleshooting:
    • DSN has not been in this account prior / in the past two months
    • Added unit to pending
    • Cell active on unit
    • Sent OTAP to current version 
    • Escalating to CSM for new unit add`,
    escalationText: `      
    
    ESCALATION INFORMATION
    CID:
    Company Name:
    Contact Name:
    Contact phone and email:
    What is the problem or the issue?
    • New DSN add to pending in account
    What would the customer like the CM to accomplish? 
    • New DSN contract process`,
  },
  {
    id: "dsn-pending-active-template",
    label: "DSN to Pending",
    bodyTitle: `Symptom/Issue: DSN: to Pending `,
    templateText: `
    Solution/Troubleshooting:

    • Removed DSN from truck: 
    • Put DSN into pending. Issue resolved
    `,
    escalationText: ``,
  },
  {
    id: "dsn-sister-cid-transfer-template",
    label: "DSN Transfer from CID: to Sister CID:",
    bodyTitle: `Symptom/Issue: DSN Transfer from CID: to Sister CID:`,
    templateText: `
    Solution/Troubleshooting:

    • Removed device from original CID
    • Placed unit in new CID
    • Cell active
    • OBC on current version / OTAP to current version
    • Escalated to FM Asset Management for sister CID move
    `,
    escalationText: `
    Escalation to FM Asset Management:
    CID: 
    Company Name:
    Contact Name:
    Contact phone and email: 
    Request Description: {{{Recipient.FirstName}}} {{{Recipient.LastName}}} has
    requested that we move the following vehicle gateways into Pending
    on the PFM. They would like this completed for ENTER REASON HERE.
    Requested gateways to Move to Pending: DSN(s) LISTED HERE.`,
  },
  {
    id: "display-disconnect-template",
    label: "Display Disconnect",
    bodyTitle: `Symptom/Issue: Display Disconnect / Unable to connect to OBC wifi`,
    templateText: `
    Solution/Troubleshooting:
    • Truck is on and running and parked outside
    • Confirmed unit broadcasting wifi
    • Cell active in Simetric
    • Checked OBC version and confirmed current and up to date
    • Sent cycle power to truck
    • Rebooted display
    • Hit retry on C0-003 Error
    • Display connected to unit. Issue resolved
    `,
    escalationText: ``,
  },
  {
    id: "login-invalid-credentials-template",
    label: "Invalid Credentials on Login",
    bodyTitle: `Symptom/Issue: Driver unable to log in. Invalid driver ID or password`,
    templateText: `
    Solution/Troubleshooting:
    • Checked if driver ID active in PFM?
    • Had driver attempt to log in to Driver Portal
    • ELD License Active on vehicle
    • AOBRD screen comes up
    • Sent cycle power
    • Checked permissions for EFS and force stopped PMobile and EFS
    • Checked known issues
    `,
    escalationText: ``,
  },
  {
    id: "login-aobrd-template",
    label: "AOBRD Screen",
    bodyTitle: `Symptom/Issue: Display shows AOBRD screen and driver is unable to log
    in`,
    templateText: `
    Solution/Troubleshooting:
    • Checked ELD license. ELD license active. 
    • Truck is on and running
    • Sent cycle power. Display shows ELD screen
    • Checked if ELD Enabled False
    • Checked Pmobile apps in display settings to make sure permissions
    were allowed
    • Performed reinstall
    `,
    escalationText: ``,
  },
  {
    id: "login-old-version-template",
    label: "Display Version < .27xxx / Seconds Precision Mismatch",
    bodyTitle: `Symptom/Issue: Driver unable to log in. Device Version < .27xxx /
    Seconds Precision Mismatch`,
    templateText: `
    Solution/Troubleshooting:
    Display is on a version prior to 27xxx and is preventing login. 
    Sent OTAP to current display version
    `,
    escalationText: ``,
  },
  {
    id: "login-hang-requesting-logs-template",
    label: "Login Hangs On Requesting Logs",
    bodyTitle: `Symptom/Issue: Device Hangs On Requesting Logs Until Device Provides
    Option To Stop`,
    templateText: `
    Solution/Troubleshooting:
    • Is device communicating? Sent test message
    • Cell active in Simetric
    • Truck is running and parked outside
    • Driver excessive shipments cleared and driver has few shipments in
    last 15 days
    • Checked provisioned device
    • Device shows connected recently
    • Unprovisioned device record
    • Troubleshooting completed and issue persists. Contacted TSA for
    assistance
    `,
    escalationText: ``,
  },
  {
    id: "logout-invalid-password-template",
    label: "Invalid Password",
    bodyTitle: `Symptom/Issue: Driver attempted to log out and is being prompted for driver password. When the driver enters the correct password, the display returns a message saying the password is incorrect and the driver is unable to continue or get past this screen.`,
    templateText: `
    Solution/Troubleshooting:
    • Confirmed that the screen asking for the password has a 'select
    driver' option
    • Checked if there is a co-driver
    • Deleted local DB on display
    • If unable to access this file, perform a reprovision
    • If unable to reprovision, uninstall and reinstall EFS
    • Rebooted the display and the driver is able to sign out normally
    `,
    escalationText: ``,
  },
  {
    id: "no-cell-troubleshooting-template",
    label: "No Cell",
    bodyTitle: `Symptom/Issue: No Cell`,
    templateText: `
    Solution/Troubleshooting:
    • Truck engine is running
    • Checked cell in Simetric. Unit shows inactive
    • Cell activated
    • OBC refresh in cab
    • Checked power log for excessive disconnects or reboots
    • Pull power to OBC
    • LED Solid or blinking?
    • Check antenna placement if PMG(TG optional) or unit placement and
    make sure nothing is placed above the unit
    • Check cabling for 12v and for damage/disconnection
    • Swap if the above is correct and does not resolve the issue
    `,
    escalationText: ``,
  },
  {
    id: "no-wifi-troubleshooting-template",
    label: "No Wifi",
    bodyTitle: `Symptom/Issue: Wifi disconnect, display cannot connect to OBC `,
    templateText: `
    Solution/Troubleshooting:
    • Truck is on and running
    • Sent test message, message failed / was not received in cab
    • Cycle power to OBC, reboot display
    • Cell active in Simetric
    • Verify antenna is in the proper position and facing up
    • Checked airplane mode and OBC broadcasting Wifi
    
    Recommended Next Steps:
    • Pull power to OBC
    • Check antenna and OBC cables for adequate voltage and no signs of
    damage. 
    • Swap cabling or antenna if necessary
    • Swap OBC if issue persists and all above troubleshooting has been
    completed.
    `,
    escalationText: ``,
  },
  {
    id: "no-gps-troubleshooting-template",
    label: "No GPS",
    bodyTitle: `Symptom/Issue: No GPS`,
    templateText: `
    Solution/Troubleshooting:
          
    Troubleshooting Completed/Solution:
    • Truck is running and outside
    • Checked GPS report to see if unit is missing GPS
    • Sent OBC refresh / cycle power to OBC
    • Checked antenna and unit placement
    • Any visible signs of damage to OBC (antenna)?
    • Swap antenna if able, if issue persists, swap OBC
    `,
    escalationText: ``,
  },
  {
    id: "installation-assistance-template",
    label: "Installation Assistance",
    bodyTitle: `Symptom/Issue: Install PMobile in VID: with DSN: `,
    templateText: `
    Solution/Troubleshooting:

    • DSN in pending
    • OTAP Unit to current version
    • Cell active on unit
    • Processed installation
    • Truck is coming up in PFM
    • Sent test message, message received
    • ELD license active 
    • GPS reporting on unit
    • Ignition shows on when truck is on
    • Driver is able to log in. Issue resolved
    `,
    escalationText: ``,
  },
  {
    id: "installation-howto-template",
    label: " Installation Assistance / How To",
    bodyTitle: `Symptom/Issue: `,
    templateText: `
    Solution/Troubleshooting:
    • Sent instructions on how to pair unit
    • Assisted with unit pairing and confirmed installation. Issue resolved
    `,
    escalationText: ``,
  },
  {
    id: "instinct-change-vid-template",
    label: "Change Instinct VID",
    bodyTitle: `Symptom/Issue: Instinct Change VID`,
    templateText: `
    Solution/Troubleshooting:

    • Changed VID from login screen 
    • Verified truck is coming up correctly on Fleet Manager with the right
    DSN attached
    • Checked Device Diagnostics and Cell, ECM, GPS and Wifi active.
    • Driver is able to log in and continue. Issue resolved
    `,
    escalationText: ``,
  },
  {
    id: "smd-trips-present-template",
    label: "SMD Trips Present After Completion",
    bodyTitle: `Symptom/Issue: SMD trips still present after being completed`,
    templateText: `
    Solution/Troubleshooting:

    • Confirmed last trip was not completed on list
    • Former trip wasn't completed as the driver was using forms
    instead. 
    • Went to My Trips and completed trip correctly through there
    • The device is functioning normally. Driver is able to accept next trip and continue as normal. Issue resolved
    
    Recommended Next Steps:
    • Use trips to complete trips and not forms
    `,
    escalationText: ``,
  },
  {
    id: "smd-failed-launch-troubleshooting-template",
    label: "SMD Failed to Launch",
    bodyTitle: `Symptom/Issue: SMD App is not opening normally`,
    templateText: `
    Solution/Troubleshooting:

    • Driver logged in for extended period of time(greater than 8 days)
    • Advised driver to log out of Instinct, and log back in using the
    'add user' button at log in. 
    • SMD app loading normally. Issue resolved
    `,
    escalationText: ``,
  },
  {
    id: "otap-template",
    label: "OTAP",
    bodyTitle: `Symptom/Issue: OTAP Request for VID: `,
    templateText: `
    Solution/Troubleshooting:

    • Sent update to current version for OBC
      
    Recommended Next Steps:
    • Wait 1 hour for OTAP to complete
    • Contact support if update was not successful or for additional
    OTAPs  
    • For OTAPs to more than 5 units, escalate to SOTA
    `,
    escalationText: ``,
  },
  {
    id: "unable-to-reach-host-template",
    label: "Unable to Reach Host",
    bodyTitle: `Symptom/Issue: Unable to reach host`,
    templateText: `
    Solution/Troubleshooting:

    • Checked OBC and display version
    • Sent test message and message received
    • Cell active
    • Truck is running and parked outside
    • OBC refresh from in-cab
    • Checked display time matches customer time, date and time zone
    • Automatic date and time is turned on
    • Checked excessive shipments and shipments clear up to 15 days on
    driver logs
    • Checked for excessive malfunctions and diagnostics
    • Attempted to log in, issue persists
    • Reprovisioned display from login screen.
    • Sent cycle power to OBC and rebooted display
    • Driver is able to log in. Issue resolved
    `,
    escalationText: ``,
  },
  {
    id: "dvr-pairing-troubleshooting-template",
    label: "Unable to Pair DVR",
    bodyTitle: `Symptom/Issue: Unable to Pair DVR`,
    templateText: `
    Solution/Troubleshooting:

    • Truck is on and running
    • VID installed and coming up in PFM. 
    • Confirmed DSN is correct and OBC is communicating
    • Sent cycle power to OBC
    • Checked Cell status for DVR
    • Cell status activated, checked DVR / SIM number
    • Pulled power to DVR for 2 minutes
    • Checked antenna placement
    
    Recommended Steps:
    • Wait 10-15 minutes and try pairing again. If DVR still does not come up, log out of DVR toolkit and try againAdditional Notes:
    • Contact TSA or escalate if prior troubleshooting did not resolve the issue
    `,
    escalationText: ``,
  },
  {
    id: "drivewyze-activation-template",
    label: "DriveWyze Activation",
    bodyTitle: `Symptom/Issue: Drivewyze Activation PMobile `,
    templateText: `
    Solution/Troubleshooting:

    • Checked Drivewyze version and updated to current version
    • Drivewyze License Active on PFM
    • Escalating to activate truck in Drivewyze portal
    `,
    escalationText: `
    ESCALATION TEMPLATE
    CID:
    Company Name:
    Contact Name and Phone Number:
    Case Number:
    Information of Unit needing bypass activated
    Truck number(s):
    DSN:
    USDOT#:
    License plate #:
    License plate state:
    VIN(complete):`,
  },
  {
    id: "log-incorrect-time-template",
    label: "Incorrect Time On Logs",
    bodyTitle: `Symptom/Issue: Driver states that log time is incorrect on display`,
    templateText: `
    Solution/Troubleshooting:

    • Date / Time of Incorrect Logs:
    • Checked to see if availability matches reported time.
    • Checked for UDE
    • Checked driver logs for the incorrect time
    • Had driver request logs from in-cab
    • Had driver log out and back in
    • If no issues, have driver attempt to make log edits to correct the time
    
    Recommended Next Steps:
    • If unsure about logs, shift time or HOS interpretation contact Safety
    for clarification.
    `,
    escalationText: ``,
  },
  {
    id: "log-edit-template",
    label: "Log Edit",
    bodyTitle: `Symptom/Issue: Log Edit`,
    templateText: `
    Solution/Troubleshooting:

    • Assisted driver in how to find the log edit function on the
    display.
    • Driver made the changes to the logs. Driver reports logs are correct
    now. 
    
    Recommended Next Steps: 
    • If unsure about logs, shift time or HOS interpretation contact Safety for clarification.
    `,
    escalationText: ``,
  },
  {
    id: "log-auto-drive-edit-template",
    label: "Auto Drive Time Edit",
    bodyTitle: `Symptom/Issue: Logs show driver on drive and the driver says that the drive time is incorrect. `,
    templateText: `
    Solution/Troubleshooting:

    • Checked to see if driver accidentally accepted a UDE
    • Checked if there was an engine shutdown that would allow the auto
    drive time to be corrected
    
    Recommended Next Steps: 
    • If unsure about logs, shift time or HOS interpretation contact Safety or
    DOT for clarification. 
    `,
    escalationText: ``,
  },
  {
    id: "log-no-time-template",
    label: "",
    bodyTitle: `Symptom/Issue: No drive time after coming from break`,
    templateText: `
    Solution/Troubleshooting:

    • Driver came back from break with no drive time
    • Logs show driver ON duty for the break time
    • Driver made a log edit to correct the time. Driver reports logs
    are showing correctly now. Issue resolved
    
    Recommended Next Steps:
    • If unsure about logs, shift time or HOS interpretation contact Safety or DOT for clarification.
    `,
    escalationText: ``,
  },
  {
    id: "no-power-troubleshooting-template",
    label: "No Power To OBC",
    bodyTitle: `Symptom/Issue: No Power To OBC`,
    templateText: `
    Solution/Troubleshooting:

    • Truck engine is running
    • Checked power log for excessive disconnects or reboots
    • LED shows Off
    • Pulled power to unit
    • Checked cabling. Unit is getting correct volts and no observed
    damage to unit or cabling
    • LED is still not lit. Swap OBC
    `,
    escalationText: ``,
  },
  {
    id: "no-ecm-troubleshooting-template",
    label: "No ECM",
    bodyTitle: `Symptom/Issue: No / Bad ECM `,
    templateText: `
    Solution/Troubleshooting:

    • Year/ Make/ Model:
    • Truck is on and running. 
    • Ignition shows on in PFM?
    • Checked Diagnostic Device / Diagnostic PerformX
    • Display does not show ignition or ECM
    • Sent cycle power
    • Advised technician on correct cabling for make/year/model on OBC
    • Checked cabling for damage/disconnection and 12v
    • Checked ECM port with a diagnostic tool. If not reading, fix ECM
    port or use different ECU
    • Recommend swap OBC
    `,
    escalationText: ``,
  },
  {
    id: "case-notes-email-template",
    label: "Case Notes Template",
    bodyTitle: ``,
    templateText: `
    Hello {{{Recipient.FirstName}}}, 

    Thank you for contacting Trimble Transportation Support.  Please see below for notes on case {{{Case.CaseNumber}}}:  
               
    Please reply to this email with any problem you may have. If you would like to speak with a representative you may contact 888-346-3486, select option 1, and reference case number {{{Case.CaseNumber}}}. To search for answers to your Trimble Transportation questions, please visit MyTransportation at https://crmtransportation.force.com/service.
          
    `,
    escalationText: ``,
  },
]