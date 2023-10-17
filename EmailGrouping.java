import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class EmailGrouping {
    public static void main(String[] args) {
        String csvFilePath = "first_survey_data_one.csv"; // Replace with your CSV file path

        try {
            // Read the CSV file
            BufferedReader reader = new BufferedReader(new FileReader(csvFilePath));
            String line;
            List<String> emails = new ArrayList<>();

            while ((line = reader.readLine()) != null) {
                // Assuming each line contains a single email address
                emails.add(line);
            }

            // Shuffle the email list for randomness (optional)
            Collections.shuffle(emails);

            // Group emails into lists of no larger than 20
            List<List<String>> emailGroups = new ArrayList<>();
            int groupSize = 20;
            for (int i = 0; i < emails.size(); i += groupSize) {
                int endIndex = Math.min(i + groupSize, emails.size());
                List<String> group = emails.subList(i, endIndex);
                emailGroups.add(group);
            }

            // Display the email groups
            int groupNumber = 1;
            for (List<String> group : emailGroups) {
                System.out.println("Group " + groupNumber++ + ":");
                for (String email : group) {
                    System.out.println(email);
                }
                System.out.println();
            }

            // Close the CSV file reader
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
