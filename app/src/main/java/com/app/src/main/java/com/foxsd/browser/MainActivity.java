package com.foxsd.browser;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import com.foxsd.browser.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {
    private ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        WebView webView = binding.webview;
        WebSettings ws = webView.getSettings();
        ws.setJavaScriptEnabled(true);
        webView.setWebViewClient(new WebViewClient()); // يبقى داخل التطبيق
        webView.loadUrl("https://www.google.com"); // غيّر الرابط إذا أردت
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        this.binding = null;
    }
}