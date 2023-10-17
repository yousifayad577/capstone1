package com.AerieSpringBoot.Aerie;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Document(collection = "groups")
@Data
public class Groups {
    @Id
    private ObjectId id;
    private int durationInSeconds;
    private boolean finished;
    private String ResponseId;
    private String RecipientLastName;
    private String RecipientFirstName;
    private String RecipientEmail;
    private String ExternalReference;
    private String DistributionChannel;
    private String UserLanguage;
    private String Q2;
    private String Q12;
    private String Q9;
    private String Q4;
    private String Q3;
    private String Q7;
    private String Q8;
    private String Q10;
    private String Q11;

    // Getters and Setters
    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public int getDurationInSeconds() {
        return durationInSeconds;
    }

    public void setDurationInSeconds(int durationInSeconds) {
        this.durationInSeconds = durationInSeconds;
    }

    public boolean isFinished() {
        return finished;
    }

    public void setFinished(boolean finished) {
        this.finished = finished;
    }

    public String getResponseId() {
        return ResponseId;
    }

    public void setResponseId(String ResponseId) {
        this.ResponseId = ResponseId;
    }

    public String getRecipientLastName() {
        return RecipientLastName;
    }

    public void setRecipientLastName(String RecipientLastName) {
        this.RecipientLastName = RecipientLastName;
    }

    public String getRecipientFirstName() {
        return RecipientFirstName;
    }

    public void setRecipientFirstName(String RecipientFirstName) {
        this.RecipientFirstName = RecipientFirstName;
    }

    public String getRecipientEmail() {
        return RecipientEmail;
    }

    public void setRecipientEmail(String RecipientEmail) {
        this.RecipientEmail = RecipientEmail;
    }

    public String getExternalReference() {
        return ExternalReference;
    }

    public void setExternalReference(String ExternalReference) {
        this.ExternalReference = ExternalReference;
    }

    public String getDistributionChannel() {
        return DistributionChannel;
    }

    public void setDistributionChannel(String DistributionChannel) {
        this.DistributionChannel = DistributionChannel;
    }

    public String getUserLanguage() {
        return UserLanguage;
    }

    public void setUserLanguage(String UserLanguage) {
        this.UserLanguage = UserLanguage;
    }

    public String getQ2() {
        return Q2;
    }

    public void setQ2(String Q2) {
        this.Q2 = Q2;
    }

    public String getQ12() {
        return Q12;
    }

    public void setQ12(String Q12) {
        this.Q12 = Q12;
    }

    public String getQ9() {
        return Q9;
    }

    public void setQ9(String Q9) {
        this.Q9 = Q9;
    }

    public String getQ4() {
        return Q4;
    }

    public void setQ4(String Q4) {
        this.Q4 = Q4;
    }

    public String getQ3() {
        return Q3;
    }

    public void setQ3(String Q3) {
        this.Q3 = Q3;
    }

    public String getQ7() {
        return Q7;
    }

    public void setQ7(String Q7) {
        this.Q7 = Q7;
    }

    public String getQ8() {
        return Q8;
    }

    public void setQ8(String Q8) {
        this.Q8 = Q8;
    }

    public String getQ10() {
        return Q10;
    }

    public void setQ10(String Q10) {
        this.Q10 = Q10;
    }

    public String getQ11() {
        return Q11;
    }

    public void setQ11(String Q11) {
        this.Q11 = Q11;
    }
}
