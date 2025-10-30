<cfsetting showDebugOutput="false">
<cfparam name="url.reporter" default="simple">
<cfparam name="url.directory" default="tests.specs">
<cfparam name="url.recurse" default="true">

<cfscript>
    testbox = new testbox.system.TestBox(
        directory = {
            mapping = url.directory,
            recurse = url.recurse
        }
    );
    
    results = testbox.run();
    
    writeOutput(results);
</cfscript>
