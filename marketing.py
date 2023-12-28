import pandas as pd
import re

def create_referral_code(first_name, last_name, phone_number):
    """
    Create a simple and unique referral code based on the first name, last name, and phone number.
    """
    # Use the first two letters of first name and last name, and last 4 digits of phone number
    code = first_name[:2].upper() + last_name[:2].upper() + phone_number[-4:]
    return code

def save_to_csv(first_name, last_name, phone_number, referral_code, file_name='referrals.csv'):
    """
    Save the details along with the generated referral code to a CSV file.
    """
    # Create a DataFrame for the new entry
    new_entry = pd.DataFrame({
        'First Name': [first_name],
        'Last Name': [last_name],
        'Phone Number': [phone_number],
        'Referral Code': [referral_code]
    })
    
    try:
        # Try to read the existing CSV file
        existing_data = pd.read_csv(file_name)
        updated_data = pd.concat([existing_data, new_entry], ignore_index=True)
    except FileNotFoundError:
        # If file does not exist, start a new one
        updated_data = new_entry

    # Save the updated data to CSV
    updated_data.to_csv(file_name, index=False)

def format_message(first_name, last_name, file_name='referrals.csv'):
    """
    Generate a personalized referral program message including the user's unique referral code.
    """
    try:
        # Load the referral data
        data = pd.read_csv(file_name)

        # Find the referral code for the given first name and last name
        data['First Name'] = data['First Name'].fillna('')
        data['Last Name'] = data['Last Name'].fillna('')
        data['Phone Number'] = data['Phone Number'].fillna('')

        matching_entries = data[(data['First Name'] == first_name) & (data['Last Name'] == last_name)]

        if matching_entries.empty:
            return "No referral code found for the provided name."

        if len(matching_entries) > 1:
            return "Warning: Multiple entries found. Using the first one."

        referral_code = matching_entries.iloc[0]['Referral Code']

        # Create the personalized message
        message = f"I am launching a new referral program to grow Drive with Shahid and you can earn *$50* for every new student you refer to us!\n\n" \
                  f"Refer a friend to join our driving school, and *you'll receive $50* for each new student who takes at least one class. Just share your unique referral code: *{referral_code}* with them and ask them to mention it when they sign up.\n\n" \
                  f"Help your friends and family become confident drivers, and earn rewards along the way!\n\n" \
                  f"Referral code: *{referral_code}* (Give upto 3 referrals per month) \n\n"\
                  f"Stay safe and keep driving,\n" \
                  f"Shahid"
        return message
    
    except FileNotFoundError:
        return "Referral data file not found."

def process_and_save_data_from_file(file_path, csv_file_name='referrals.csv'):
    with open(file_path, 'r') as file:
        for line in file:
            # Remove all non-alphanumeric characters except for spaces
            cleaned_line = re.sub(r'[^\w\s]', '', line)
            # Split the entry into words
            parts = cleaned_line.split()
            # Extract the phone number (last element)
            phone_number = ''.join(filter(str.isdigit, parts.pop()))

            # Extract first and last name
            first_name = parts[0]
            last_name = '' if len(parts) == 1 else parts[1]
            # Create referral code
            referral_code = create_referral_code(first_name, last_name, phone_number)
            # Save to CSV
            save_to_csv(first_name, last_name, phone_number, referral_code, csv_file_name)


# Example usage
# text_file_path = '/Users/vaibhavholani/development/drive_with_shahid/raw_data.txt'  # Replace with the path to your text file
# process_and_save_data_from_file(text_file_path)

# Example usage
first_name = "CRISTELL"
last_name = ""
phone_number = "4379882501"
referral_code = create_referral_code(first_name, last_name, phone_number)

# # Save the data to CSV
# # save_to_csv(first_name, last_name, phone_number, referral_code)

# # Display the generated referral code for confirmation
# referral_code

# # Generate the message
formatted_message = format_message(first_name, last_name)
print(formatted_message)