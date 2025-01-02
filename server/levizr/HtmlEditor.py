import re
import json
# Function to extract HTML code
def html_extractor(html_string):
    pattern = r'<!DOCTYPE html>[\s\S]*?</html>'
    matches = re.findall(pattern, html_string, re.IGNORECASE)
    if matches:
        return matches[0]
    else:
        return "No HTML content found."

# Function to remove HTML tags
def html_remover(html_string):
    # Remove inline CSS
    clean_css = re.compile('<style.*?>.*?</style>', re.DOTALL)
    html_string = re.sub(clean_css, '', html_string)

    # Remove JavaScript
    clean_js = re.compile('<script.*?>.*?</script>', re.DOTALL)
    html_string = re.sub(clean_js, '', html_string)

    # Remove HTML tags
    clean_html = re.compile('<.*?>')
    cleaned_text = re.sub(clean_html, '', html_string)

    # Remove remaining CSS within HTML attributes
    cleaned_text = re.sub(r'\s?style=("|\').*?("|\')', '', cleaned_text)
    cleaned_text = cleaned_text.replace('```',"")
    return cleaned_text

def beautify_AiResponse(response):
    # Convert **text** to <h2>text</h2>
    response = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', response)
    
    # Convert numbered lists into <ol>...</ol>
    response = re.sub(r'(\d+)\.\s(.*?)(?=(?:\d+\.|\n\n|$))', r'<li>\2</li>', response)
    response = re.sub(r'(<li>.*?</li>)', r'<ol>\1</ol>', response)

    # Convert - text into <li>text</li> and wrap them in <ul>...</ul>
    response = re.sub(r'- (.*?)(?=(?:- |$))', r'<li>\1</li>', response)
    response = re.sub(r'(<li>.*?</li>)', r'<ul>\1</ul>', response)

    # Replace newline with <br> for better formatting
    response = response.replace('\n', '<br>')
    
    return response

def loadJson(response):
    data = []
    try:
        # Find the start and end of the JSON-like content
        start = response.find('<json:') + len('<json:')
        end = response.find('/>', start)
        
        # Extract the JSON-like content
        json_str = response[start:end].strip()
        data = json.loads(json_str)
    except :
        # Find the start and end of the JSON-like content
        start = response.find('```json:') + len('<json:')
        end = response.find('```', start)
        
        # Extract the JSON-like content
        json_str = response[start:end].strip()
        data = json.loads(json_str)
    return data




