## Super timeline traditional method

Disorganizaed time data is a major issue during any digital forensics investigations. Timestamps from every file, log, and event are scattered everywhere, making it nearly impossible to see what happened on a system. That's where the super timeline comes in. A super timeline is chronological organized collection of all the timestamps from artifacts collected to help clear get a clear picture of everything that has occurred on a system.

The Plaso framework helps with type of correlation and collection of timestamps to create the super timeline. Under this framework the python script `log2timeline.py` is to create the main plaso container file or body file needed. It aggregates and helps clean timestamp data points into one singular file.

There is some confusion in its usage, many that go under this endeavor do not realize that the tools under the Plaso framework are command line tools and need to execute as such. The framework makes it easy to use. If you have a digital forensics image like an e01 or raw file the command would look like:

```bash
log2timeline.py --storage-file timeline.plaso forensic_image.raw
```
older versions of Plaso, the command looked like:

```bash
log2timeline.py plaso.dump image.dd
```

In order to make sense of data, a secondary tool known as `psort.py` is used. The psort.py command is your tool for this. It lets you sort, filter, and export the timeline into a more readable format, like a CSV. The command to create a CSV is simple:

```bash
psort.py -o dynamic -w registrar.csv timeline.plaso
```
 older version of psort.pylooks like the following:

 ```bash
 psort.py -o l2tcsv -w timeline.csv plaso.dump
 ```

Super timeline is definitely a process intensive workload and make take time to create. To shorten times or if the investiagtor knows time ranges, `psort.py` can use time slices or filter to ensure output only represents the time frames you're interested in.

```bash
psort.py -q --slice "2004-09-20T16:13:02" timeline.plaso
```
or

```bash
psort.py -q  timeline.plaso "date < '2004-09-20 16:20:00' and date > '2004-09-20 16:10:00'"
```

The plaso framework has been around for quite sometime and was originally created in the `PERL` scripting language. While there have been some updates to the tool in recent years, it still contains some of the older modules and parsing from that code base such `l2tcsv`.

Most digital forensics linux distributions and windows analysis virtual machines contain or have the plaso framework installed. If you need run a quick and fast super timeline to get the ball rolling plaso offers:

```bash
psteal.py --source image.raw -o dynamic -w registrar.csv
```
This will do both processes all in one fail swoop. Only problem is if you need the plaso container file with all the timestamps, you do not create it with this method.

 ---

 ## Timesketch

 TimeSketch brings a whole new flavor to super timeline as it help visualize the data in a SIEM like manner. Ultimately, Timesketch also relies on the power of the Plaso framework, specifically the `log2time` to create body file or plaso container to ingest. Timesketch is a web-based tool created to make something of the complex data, it allows the user to have more control of data in a manner that is filterable, is queryable and is much more clean than looking at the data through spreadsheets and large CSV files.

 How to Run Timesketch

Running Timesketch is typically done using Docker, which simplifies the setup. Once it's up and running, you'll access it through your web browser.

* Create a New Sketch: A "sketch" is what Timesketch calls a new case or project. You'll give it a name and a description.

* Upload the .plaso File: In your new sketch, you'll be prompted to upload the .plaso file you created earlier.

* Start Analyzing: Once the file is ingested, you'll see a timeline of all the events. The real power is in the search bar. You can use simple queries to find exactly what you're looking for.

Example Queries:

* To find all web browser events from a specific date:
    ```bash
    source_short:"WEBHIST" AND date:"2025-09-10"
    ```
* To find all files created by a specific user:
    ```bash
    username:"john.doe" AND filename:"*.exe"
    ```
* To find all events related to a specific IP address:
    ```bash
    IP:"192.168.1.5"
    ```
